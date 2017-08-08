import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import {
  RootContent,
  AppHeader,
  AppFooter,
  HeaderProfileContainer,
  HeaderProfilePicutre,
  Title } from './kit/Layout'
import * as pt from './PropTypesDefinition'


const App = ({ viewer, children }) => (
  <RootContent data-framework="relay">
    <AppHeader>
      <HeaderProfileContainer>
        <HeaderProfilePicutre src={`assets/${viewer.profilePicutre}`} />
      </HeaderProfileContainer>
      <Title>{viewer.document.meta.title}</Title>
    </AppHeader>

    {children}

    <AppFooter />
  </RootContent>
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
