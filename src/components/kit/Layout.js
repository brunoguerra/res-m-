import styled from 'styled-components'
import v from './variables'

export const AppHeader = styled.section`
  flex: 0 0 140px;
  display: flex;
  flex-flow: column no-wrap;
  padding: 20px;
  color: ${v.foreColor};
  font-size: 1em;
  text-align: center;
`

export const AppFooter = styled.footer`
  font-size: 0.8em;
`

export const Title = styled.h1`
  color: ${v.foreColor};
  font-size: 1.5em;
  text-align: center;
`
