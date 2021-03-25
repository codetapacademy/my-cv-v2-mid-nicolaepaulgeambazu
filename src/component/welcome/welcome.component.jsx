import React, { useEffect, useState } from 'react'
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
    <div>
      <Header title={data.sectionTitle}/>
      <WS.Nume>{data.creator}</WS.Nume>
    </div>
  )
}
