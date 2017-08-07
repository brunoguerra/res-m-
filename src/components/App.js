import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { AppHeader, AppFooter, Title } from './kit/Layout'
import ProfilePicutre from './user/ProfilePicture'
import * as pt from './PropTypesDefinition'


const App = ({ viewer, children }) => console.log('DCO: ', viewer) || (
  <div data-framework="relay">
    <AppHeader>
      <ProfilePicutre src={viewer.profilePicutre} />
      <div>
        <Title>{viewer.document.meta.title}</Title>
      </div>
    </AppHeader>

    {children}

    <AppFooter />
  </div>
)

App.propTypes = {
  viewer: pt.viewer.isRequired,
}

export default createFragmentContainer(
  App,
  graphql`
    fragment App_viewer on User {
      id
      name
      profilePicutre
      document {
        meta {
          title
        }
      }
    }
  `
)
