import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Header } from "../header";
import { Subtitle } from "../subtitlu/subtitlu.component";
import { Subtitlu } from "../titlu/titlu.style";
import * as WS from "../welcome/welcome.style";
import { ListItem, ListWrapper } from "./skills.style";

export const Skills = () => {
  const [data, setData] = useState({ skillsLegendList: [], categoryList: [] });

  useEffect(() => {
    fetch("http://localhost:3800/skills")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const {
    sectionTitle,
    sectionSubtitle,
    skillsLegendList = [],
    categoryList = [],
  } = data;

  return (
    <WS.WelcomeWrapper>
      <Header title={sectionTitle} />
      <Subtitlu title={sectionSubtitle} />
      <ListWrapper>
        {skillsLegendList.map((thinks) => {
          const { icon, skill, numberOfSkills } = thinks;
          return (
            <ListItem key={skill}>
              <span className={`icon__${icon}`}>
                {skill} {numberOfSkills}
              </span>
            </ListItem>
          );
        })}
      </ListWrapper>
      {categoryList.map((list) => {
        const { category, skillList } = list;
        return (
          <div key={category}>
            <Subtitle title={category} />
            {skillList.map((lista) => {
              const { color, skills } = lista;
              return (
                <div>
                  {skills.map((skill) => {
                    return <Button bgCuloare={color}>{skill}</Button>;
                  })}
                </div>
              );
            })}
          </div>
        );
      })}

      <Button type="disc" bgCuloare="#50d166" icon="icon__arrow-down" />
    </WS.WelcomeWrapper>
  );
};
