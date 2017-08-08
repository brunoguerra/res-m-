import { css } from 'styled-components'

const timeline = {
  background: '#ddd;'
}

const mixIns = {
  containerShadow: css`
    box-shadow: 0.5rem 0.5rem 2rem 0 rgba(black, 0.2);
  `,
}

export default {
  m: mixIns,
  foreColor: 'LightSkyBlue',
  borderWidth: 4,
  dotDiameter: 8,
  gutter: 30,
  timeline,
}
