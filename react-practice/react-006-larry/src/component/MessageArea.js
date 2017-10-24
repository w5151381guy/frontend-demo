import React from 'react'
import styled from 'styled-components'
import { RightMessageItem } from './MessageItem'

const MessageAreaWrapper = styled.div`
  height: calc(100vh - 300px);
  width: 100%;
  box-shadow: 1px 1px 5px #888888;
`

const MessageArea = ({ messages }) => (
  <MessageAreaWrapper>
    {messages.map(message => <RightMessageItem>{message}</RightMessageItem>)}
  </MessageAreaWrapper>
)

export default MessageArea
