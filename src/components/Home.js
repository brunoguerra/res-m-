import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Timeline from './Timeline'

const Home = ({ viewer }) => (
  <Timeline items={viewer.document.items.edges.map(edge => edge.node)} />
)

Home.PropTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.required
  }))
}

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_viewer on User {
      document {
        meta {
          id
          title
        }
        items {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  `,
)
