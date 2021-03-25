import React from 'react'
import { render } from 'react-dom'
//-import { MyCv } from './component/my-cv/my-cv.component'
import { Structure } from './component/structura'
import './style.css'

const here = document.querySelector('#here')
const mycv = <Structure/>

render(mycv, here)
