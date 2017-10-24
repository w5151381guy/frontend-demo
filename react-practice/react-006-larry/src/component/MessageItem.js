import styled from 'styled-components'

const MessageItem = styled.div`
  font-size: 24px;
  margin-top: 10px;
  padding: 0 5px;
`

export const RightMessageItem = MessageItem.extend`text-align: right;`

export const LeftMessageItem = MessageItem.extend`text-align: left;`
