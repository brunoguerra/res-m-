import React from 'react'
import styled from 'styled-components'

const RoundedImg = styled.img`
  border-radius: 50%;
`

const ProfilePicutre = ({ src }) => (
  <RoundedImg src={`assets/${src}`} />
)

ProfilePicutre.defaultProps = {
  src: 'no-provided-profile.svg',
}

export default ProfilePicutre
