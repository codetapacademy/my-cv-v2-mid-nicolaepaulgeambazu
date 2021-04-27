import React, { useEffect, useState } from "react";
import * as WS from "./connect.style";
import { Header } from "../header";
//-import iconSet from './selection.json'
//-import IcomoonReact, {iconList} from 'icomoon-react'
//-import { StyledDisc } from '../button/button.style'
import { config } from "./button.config";
import { Infobox } from "../infobox";
import { Button } from "../button";
import { Celula } from "../celula";

export const Connect = () => {
  const [data, setData] = useState({ socialList: [] });
  const [selected, updateSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3800/connect")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const hide = () => updateSelected(null);
  const selectMe = (icon) => {
    console.log(data);
    updateSelected(data.socialList.find((a) => a.icon === icon))
  };
  return (
    
    <WS.WelcomeWrapper>
      <Celula>
        <Header title={data.sectionTitle} />
      </Celula>
      <Celula></Celula>
      <Celula>
        <WS.StyledImage />
      </Celula>
      <Celula>
        <WS.StyledIcon span="1">
          {data?.socialList.map((el) => (
            <Button {...config} key={el.icon} icon={`icon__${el.icon}`} onClick={() =>selectMe(el.icon)} />
          ))}
          {selected && <Infobox {...selected} close={hide} />}
        </WS.StyledIcon>
        </Celula>
      <Button type="disc" bgCuloare="#50d166" icon="icon__arrow-down" />
    </WS.WelcomeWrapper>
  );
};
