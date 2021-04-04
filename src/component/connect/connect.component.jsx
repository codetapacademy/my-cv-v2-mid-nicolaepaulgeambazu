import React, {useEffect, useState } from 'react' 
import * as WS from './connect.style' 
import { Header } from '../header'
import { Button } from '../button'
import iconSet from './selection.json'
import IcomoonReact, {iconList} from 'icomoon-react'


export const Connect = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3800/connect')
      .then(res => res.json())
      .then(res => setData(res))    
  },[])

  return (
      <WS.WelcomeWrapper>
      <Header title={data.sectionTitle}/>
      <WS.StyledImage path={data.avatarPath} />
        <Button  type="disc" bgculoare="#1875F0">
          <IcomoonReact
            size={20}
            color="#fff"
            icon="home"
            iconSet={iconSet}
          />
          <span className="icon__codetap"/>
          </Button>
        
          <Button type="disc" bgculoare="#50d166">
          <span className="icon__arrow-down"/>
        </Button>
      </WS.WelcomeWrapper>
  )





}
