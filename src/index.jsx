import React from 'react'
import { render } from 'react-dom'
import { Structure } from './component/structura'
import './fonts/style.css'
const here = document.querySelector('#here')
const structure = <Structure/>

render(structure, here)
