import React from 'react'
import { render } from 'react-dom'
import { MyCv } from './component/my-cv/my-cv.component'

const here = document.querySelector('#here')
const mycv = <MyCv />

render(mycv, here)
