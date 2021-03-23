import React from 'react'
import { Header } from '../header/header.components'
import * as WS from './welcome.style'

export const Welcome = () => {
  return (
    <div>
      <Header/>
      <WS.Nume>Niste text</WS.Nume>
    </div>
  )
}
