import styled from'styled-components'

export const WelcomeWrapper = styled.div`
  grid-column: 1/-1;
`
export const StyledImage = styled.div`
padding-top:100%;
width:100%;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 6px;
transform: rotate(-2.5deg);
margin-top: 5px;
`;


export const StyledIcon = styled.i`
  font-size: ${({ icon }) => (icon === "codewars" ? "48" : "30")}px;
  `;
