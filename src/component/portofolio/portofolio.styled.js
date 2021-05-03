import styled from 'styled-components'

export const Little = styled.div`
  font-size:25px;
  color:grey;
`

export const Title = styled.div`
  font-size:20px;
  margin-bottom:5px;
  margin-top:5px;
  color:grey;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Icons = styled.div`
  display: block;
  font-size: 15px;
  border-radius: 50%;
  margin: 5px;
  width: 50px;
  height: 50px;
  background: url(${({ logo }) => (logo ? logo : "")});
`;
export const Subt = styled.div`
  font-size:15px;
  color:grey;
  margin-bottom:5px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
