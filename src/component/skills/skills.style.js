import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  grid-column: 1/-1;
`

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
`

export const ListWrapper = styled.div`
  padding:10px 20px;
  background-color:white;
`
export const ListItem = styled.div`
font-size:18px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
border: 1px solid #333;
border-radius:6px;
`

export const ListItemIcon = styled.div`
  display:grid;
`
