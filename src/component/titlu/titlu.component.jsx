import React from 'react'
import * as TS from './titlu.style'

if (true) {
  // everything inside those curly brackets will happen
}  else {
  // everything inside those curly brackets will never happen
}

export const Titlu = ({ children, tag }) => {
  // return React.createElement(tag, null, children)
return tag === 'h1'
  ? <TS.StyledTitle>{children}</TS.StyledTitle>
  : tag === 'h2'
    ? <TS.Subtitlu>{children}</TS.Subtitlu>
    : <TS.StyledArticleTitle>{children}</TS.StyledArticleTitle> 
  // return (
  //   <>
  //     <h1>{children} - {tag}</h1>
  //     <h2>{children} - {tag}</h2>
  //     <h3>{children} - {tag}</h3> 
  //   </>
  // )
}
