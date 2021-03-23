import React from 'react'
import { render } from 'react-dom'
//-import { MyCv } from './component/my-cv/my-cv.component'
import { Structure } from './component/structura'

const here = document.querySelector('#here')
const mycv = <Structure/>

render(mycv, here)
