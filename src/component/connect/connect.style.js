import styled from'styled-components'
import image from '../../imagine/image.jpg'


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
background-image: url(${image});
position: relative;
background-size:cover;
background-repeat:no-repeat;
width:337px;
height:-25px;
margin:0 auto;
margin-bottom:20px;

`;





export const StyledIcon = styled.i`
  font-size: ${({ icon }) => (icon === "codewars" ? "48" : "30")}px;
  display:grid;
  grid-gap:10px;
  grid-template-columns: repeat(4, 1fr);
  `;

export const imagine = styled.i`
margin: 0;
height:20px;

`
