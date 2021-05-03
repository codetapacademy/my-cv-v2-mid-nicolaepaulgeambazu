import React, { useState, useEffect } from "react";
import { Connect } from "../connect/connect.component";
//-import { Skills } from "../skills/skills.component";
import { Welcome } from "../welcome/welcome.component";
import { GridLayout } from "./structura.style";
import { Skills } from "../skills/skills.component";
import { Experience } from "../experience/experience.component";
import { Open } from "../open/open.component";
import { Portofolio } from "../portofolio/portofolio.component";
import { Recomandation } from "../recomandation/recomandation.component";
import { Review } from "../review/review.component";
import Menu from "../menu/Menu";

export const Structure = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3800/welcome")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <GridLayout>
      <Menu />
      <Welcome />
      <Connect />
      <Skills />
      <Experience />
      <Open />
      <Portofolio />
      <Recomandation />
      <Review />
    </GridLayout>
  );
};
