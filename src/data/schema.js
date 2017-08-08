// @flow

import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay'

import {
  Document,
  User,
  getUser,
  getViewer,
} from './database'

/* eslint-disable no-use-before-define */

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)
    if (type === 'User') {
      return getUser(id)
    }
    return null
  },
  (obj) => {
    if (obj instanceof User) {
      return QLUserType
    }
    return null
  },
)

const QLTimelineItemType = new GraphQLObjectType({
  name: 'Picture',
  fields: {
    id: globalIdField(),
    date: { type: GraphQLString },
    img: { type: GraphQLString },
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
  },
  interfaces: [nodeInterface],
})

const { connectionType: TimelineItemConnection, edgeType: TimelineItemEdge } =
  connectionDefinitions({ nodeType: QLTimelineItemType })

const MetaType = new GraphQLObjectType({
  name: 'Meta',
  fields: {
    id: globalIdField(),
    title: { type: GraphQLString },
  },
  interfaces: [nodeInterface],
})

const QLDocumentType = new GraphQLObjectType({
  name: 'Document',
  fields: {
    id: globalIdField(),
    meta: { type: MetaType },
    items: {
      args: { ...connectionArgs },
      type: TimelineItemConnection,
      resolve: (sup, args) => connectionFromArray(sup.items, args),
    },
  },
  interfaces: [nodeInterface],
})

const QLUserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField(),
    name: { type: GraphQLString },
    profilePicutre: { type: GraphQLString },
    document: { type: QLDocumentType },
  },
  interfaces: [nodeInterface],
})

const QueryType = new GraphQLObjectType({
  name: 'Root',
  fields: {
    node: nodeField,
    user: {
      type: QLUserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (sup, { id }) => getUser(id),
    },
    viewer: {
      type: QLUserType,
      resolve: getViewer,
    },
    now: {
      type: GraphQLInt,
      resolve: () => new Date().getTime(),
    }
  },
})


// const GraphQLMutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//
//   },
// })

export default new GraphQLSchema({
  query: QueryType,
  // mutation: GraphQLMutation,
})
