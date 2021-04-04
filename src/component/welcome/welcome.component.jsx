import React, { useEffect, useState } from 'react'
import { Button } from '../button'
import { Header } from '../header/header.components'
import * as WS from './welcome.style'

export const Welcome = () => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    fetch('http://localhost:3800/welcome')
      .then(res => res.json())
      .then(res => setData(res))
  },[])

  return (
    <WS.WelcomeWrapper>
      <Header title={data.sectionTitle}/>
      <WS.Nume>{data.creator}</WS.Nume>
      <WS.Job>{data.creatorTitle}</WS.Job>
      <WS.Common>{data.creatorAboutMe}</WS.Common>
      <WS.DescriptionBox>{data.descriptionList}</WS.DescriptionBox>
      <Button type="link" link="/CV-Paul.docx">
        <span className="icon__download"/>
        <span className="text">Download My CV</span>
      </Button>
      <Button type="disc" bgculoare="#50d166">
        <span className="icon__arrow-down"/>
      </Button>
    </WS.WelcomeWrapper>
  )
}
