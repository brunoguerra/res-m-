import React from 'react'
import styled from 'styled-components'
import v from './kit/variables'

const TimelineElement = styled.div`
  width:100%;
  max-width:800px;
  background:#fff;
  padding: 100px 50px;
  position: relative;
  box-shadow: ${v['container-shadow']};
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left:calc(33% + ${v.gutter / 2}px);
    bottom: 0px;
    width: ${v.borderWidth}px;
    background: ${v.timeline.background};
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`
const Timeline = ({ items }) => (
  <TimelineElement>
    <div>Hello</div>
  </TimelineElement>
)

export default Timeline
