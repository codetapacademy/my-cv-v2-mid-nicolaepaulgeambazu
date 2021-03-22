import React, { useEffect, useState } from 'react'
import { Button } from "../button";
//-import { Titlu } from "../titlu/titlu.component";
import * as  WS from "./my-cv.style";
import { Header } from "../header/header.components";
import { Celula } from "../celula/celula.component";

export const MyCv = () => {
  const [data, saveData] = useState({});
  useEffect(() => {
    // HERE= all data to be taken from server
    fetch("http://localhost:3800/welcome")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        saveData(response);
      });
  }, []);
  console.log(data);
  const {sectionTitle, creator, creatorTitle, creatorAboutMe,descriptionList,CommonTitlu} = data;
  return (
    <>
      <Celula>
        <Header title={sectionTitle} />
      </Celula>
      <Celula>
        <WS.Nume>{creator}</WS.Nume>
      </Celula>
      <Celula>
        <WS.Job>{creatorTitle}</WS.Job>
      </Celula>
      <Celula>
        <WS.Subtitle>{creatorAboutMe}</WS.Subtitle>
      </Celula>
      <Celula>
        <WS.DescriptionBox>{descriptionList}</WS.DescriptionBox>
      </Celula>
      <Celula>
        <WS.CommonTitlu>{CommonTitlu}</WS.CommonTitlu>
      </Celula>
      <Celula jc="center" >
        <Button type="link" link="/image.jpg" download>
          <span className="icon__download"/>
          <span className="text">Download CV</span> 
        </Button>
      </Celula>
      <Celula jc="center" >
        <Button type="disc" bgCuloare="#50d166">
          <span className="icon__arrow-down"/>
        </Button>
      </Celula>
    </>
  )
}
