import styled from "styled-components"

export const WelcomeWrapper = styled.div`
  grid-column: 1/-1;
`
export const WrapperProjects = styled.div`
border:1px solid black;
border-radius:6px;
height:${({isOpen})=> (isOpen?'auto':'0px')};
overflow:auto;
`
export const Wrappers = styled.div`
border:1px solid black;
border-radius:6px;
`

export const Table = styled.div`
border:1px solid black;
margin-bottom:10px;
`
export const ButtonBlue = styled.div`
  height: 40px;
  border-radius: 20px;
  font-size: 10px;
  background-color: #1875f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 0;
  font-weight: 900;
  padding: 20px;
`
export const ProjectStats = styled.div`
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  line-height: 2;
  border-bottom: 0;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding-right: 10px;
`;
export const ButtonExpand = styled.a`
  cursor: pointer;
  background-color: #ff006d;
  height: 40px;
  width: 40px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
`;

export const SkillColor = styled.div`
background-color:${(props)=>props.color};
border-radius:50%;
width:10px;
height:10px;
&:before{
  content:"";
  margin:10px;
  width:10px;
}

`

export const SkillN = styled.div`
color:#333;
font-size:17px;
display:inline-flex;
`
export const Box = styled.div`
border:1px solid black;
margin-bottom:10px;
`

export const Titlu = styled.div `
margin : 10px;
font-size:20px;
color:#333;
`
export const Styled = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 10px;
border: 2px solid grey;
border-bottom: 0;
`;


export const Icon = styled.div`
padding:10px;
`

