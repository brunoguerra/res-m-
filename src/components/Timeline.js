// @flow

import React from 'react'
import styled from 'styled-components'
import v from './kit/variables'

type TimelineItemType = {
  id: string,
  title: string,
  subtitle: string,
  body: string
}

const TimelineElement = styled.div`
  width:100%;
  max-width:800px;
  background:#fff;
  padding: 100px 50px;
  position: relative;
  ${v.m.containerShadow}
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

const EntryContainer = styled.div`
  display: flex;
  text-align: left;
  position: relative;
`

const EntryTitleContainer = styled.div`
  margin-bottom: .5em;
  flex: 0 0 33%;
  padding-right: ${v.gutter}px;
  text-align: right;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: ${v.dotDiameter}px;
    height: ${v.dotDiameter}px;
    border: ${v.borderWidth}px solid salmon;
    background-color:#fff;
    border-radius:100%;
    top: 15%;
    right: -${v.dotDiameter}px;
    z-index: 99;
  }
`

const EntryTitle = styled.h3`
  margin: 0;
  font-size: 120%;
`

const EntrySubtitle = styled.p`
  margin: 0;
  font-size: 100%;
`

const EntryBody = styled.div`
  margin: 0 0 3em;
  flex: 0 0 66%;
  padding-left: ${v.gutter};
`

const Entry = ({ item }) => (
  <EntryContainer>
    <EntryTitleContainer>
      <EntryTitle>
        {item.title}
      </EntryTitle>
      <EntrySubtitle>
        {item.subtitle}
      </EntrySubtitle>
    </EntryTitleContainer>
    <EntryBody>
      {item.body}
    </EntryBody>
  </EntryContainer>
)

const Timeline = ({ items } : { items: Array<TimelineItemType>}) => (
  <TimelineElement>
    {items.map(entry => (
      <Entry key={entry.id} item={entry} />
    ))}
  </TimelineElement>
)

export default Timeline
