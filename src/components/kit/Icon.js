import React from 'react'

const Icon = (props) => {
  const styles = {
    svg: {
      transform: 'scaleY(-1)',
    },
    path: {
      fill: props.color,
    },
  }

  return (
    <span style={props.containerStyle}>
      <svg
        width={props.size}
        height={props.size}
        viewBox={`0 0 ${props.size} ${props.size}`}
        style={props.style}
      >
        <g><path style={styles.path} d={props.icon} /></g>
      </svg>
    </span>
  )
}

Icon.defaultProps = {
  size: 32,
}

export default Icon
