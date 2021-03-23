import React, {useState, useEffect} from "react";
import { Header } from "../header/header.components";
//-import { Connect } from "../connect";
import { Skills } from "../skills/skills.component";
import { Welcome } from "../welcome/welcome.component";
import { GridLayout } from "./structura.style";
//-import { GridLayout } from "./app.style";


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
    </GridLayout>
  );
};
