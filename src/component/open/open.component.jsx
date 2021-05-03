import React, { useEffect, useState } from "react";
import { Header } from "../header";
import { Subtitlu } from "../titlu/titlu.style";
import * as WS from "../welcome/welcome.style";
import { Icon, Table, Wrappers } from "./open.styled";
import Acordeon from './acordeon.component';

export const Open = () => {
  const [data, setData] = useState({ stat: [], proiect: [] });
  useEffect(() => {
    fetch("http://localhost:3800/openSources")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const { sectionTitle, nameTi, stat = [] } = data;
  return (
    <WS.WelcomeWrapper>
      <Header title={sectionTitle} />
      <Subtitlu lalala={data}>{nameTi}</Subtitlu>
      <Wrappers>
        {stat.map((list) => {
          const { statIcon, statDetalii } = list;
          return (
            <>
              <Table>
                <Icon className={`icon__${statIcon}`} />
                <div>{statDetalii}</div>
              </Table>
            </>
          );
        })}
      </Wrappers>
        <Subtitlu >{data?.proiectNume}</Subtitlu>
        <Acordeon/>
    </WS.WelcomeWrapper>
  );
};
