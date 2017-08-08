import styled from 'styled-components'
import v from './variables'
import ProfilePicutre from '../user/ProfilePicture'
import media from './Media'

export const RootContent = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const AppHeader = styled.section`
  flex: 0 0 200px;
  display: flex;
  flex-flow: column no-wrap;
  padding: 20px;
  color: ${v.foreColor};
  font-size: 1em;
  text-align: center;
  width:100%;
  max-width:800px;
  ${media.desktop`padding: 0 20px;`}
  ${media.tablet`padding: 0 5px;`}
`

export const HeaderProfileContainer = styled.div`
  flex: 0 0 200px;
`

export const HeaderProfilePicutre = ProfilePicutre.extend`
  flex: 0 0 150px;
  height: 150px;
`

export const AppFooter = styled.footer`
  font-size: 0.8em;
`

export const Title = styled.h1`
  flex: 1;
  color: ${v.foreColor};
  padding-left: 20px;
  font-size: 1.5em;
  text-align: initial;
`
