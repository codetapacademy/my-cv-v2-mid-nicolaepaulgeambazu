import React, { useEffect, useState } from "react";
import { Header } from "../header";
import { Subtitlu } from "../titlu/titlu.style";
import * as WS from "../welcome/welcome.style";
import { Icon, Table, WrapperProjects } from "./open.styled";

export const Open = () => {
  const [data, setData] = useState({ stat: [], proiect: [] });
  const [mesaj, setMesaj] = useState("");
  useEffect(() => {
    fetch("http://localhost:3800/openSources")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const cate = () => {
    return <div>a</div>;
  };
  const { sectionTitle, nameTi, stat = [], proiecte } = data;
  console.log(mesaj);
  return (
    <WS.WelcomeWrapper>
      <Header title={sectionTitle} set={setMesaj} />
      <Subtitlu lalala={data}>{nameTi}</Subtitlu>
      <WrapperProjects>
        {stat.map((list) => {
          const { statIcon, statDetalii } = list;
          return (
            <Table>
              <Icon className={`icon__${statIcon}`} />
              <div>{statDetalii}</div>
            </Table>
          );
        })}
        {cate}
      </WrapperProjects>
      <Subtitlu>{data?.proiecte?.proiectNume}</Subtitlu>
    </WS.WelcomeWrapper>
  );
};
