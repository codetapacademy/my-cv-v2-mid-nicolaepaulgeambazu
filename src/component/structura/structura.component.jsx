import React, {useState, useEffect} from "react";
import { Connect } from "../connect/connect.component";
//-import { Skills } from "../skills/skills.component";
import { Welcome } from "../welcome/welcome.component";
import { GridLayout } from "./structura.style";



export const Structure = () => {

  const [data, setData]=useState({})
  useEffect(()=>{
    fetch('http://localhost:3800/welcome')
      .then(res => res.json())
      .then(res => setData(res))
  },[])
  console.log(data)
  return (
    <GridLayout>
      <Welcome/>
      <Connect/>
    </GridLayout>
  );
};
