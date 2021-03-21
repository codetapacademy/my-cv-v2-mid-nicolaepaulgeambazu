import React from 'react'
import { Button } from '../button'
import { Titlu } from '../titlu'

export const MyCv = () => {
  return (
    <div>
      <Titlu tag="h1">Special Cv</Titlu>
      <Titlu tag="h2">New skills</Titlu>
      <Titlu tag="h3">About me</Titlu>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cumque.</p>
        <p>Commodi ullam aliquid provident, magnam culpa minima? Ipsum, delectus? Unde?</p>
      </div>
      <Button>Download my cv</Button>
      <Button
        type="disc" 
        bgCuloare="red"
        size="80px"
      />
      <Button
        type="disc" 
        bgCuloare="blue"
        size="60px" 
      />
    </div>
  )
}
