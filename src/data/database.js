// @flow

import documentJson from './document.json'

export class Document {
  id: string
  title: string
}


export class User {
  id: string
  name: string
  profilePicutre: string
  document: ?Document

  constructor(
    id: string,
    name: string,
    profilePicutre: string,
    document: ?Document
  ) {
    this.id = id
    this.name = name
    this.profilePicutre = profilePicutre
    this.document = document
  }
}

// Mock authenticated ID.
const VIEWER_ID = 'me'

// Mock user data.
const viewer = new User(
  VIEWER_ID,
  'anonymous',
  'profile0.jpg',
  documentJson
)

const usersById = {
  [VIEWER_ID]: viewer,
}

export function getUser(id: ?string): ?User {
  return id ? usersById[id] : null
}

export function getViewer(): ?User {
  return getUser(VIEWER_ID)
}
