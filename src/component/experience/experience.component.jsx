import React, { useEffect, useState } from "react";
import { Header } from "../header";
import * as WS from "../welcome/welcome.style";
import * as ES from "./experience.style";
import { images } from "../../constanta/images";
import { Button } from "../button";
import { StyledChevron } from "../button/button.style";
import { Infobox } from "../infobox";

export const Experience = () => {
  const [data, setData] = useState({ jobList: [] });
  useEffect(() => {
    fetch("http://localhost:3800/experience")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const { jobList = [] } = data;
  const trimLogo = (str) => {
    const strArr = str.split("/");
    return strArr[strArr.length - 1].split(".")[0];
  };

  
    return (
      <WS.WelcomeWrapper>
        <Header title={data?.sectionTitle} />
        {jobList.map((stuff) => {
          const { jobTitle, startDate, endDate, iconPath, companyName } = stuff;
          return (
            <ES.expListWrapper>
              <ES.expList>
                <ES.icon logo={images[trimLogo(iconPath)]} />
              </ES.expList>
              <ES.exptitle>
                <ES.exptitle> {jobTitle}</ES.exptitle>
                <ES.exptitle> {companyName}</ES.exptitle>
              </ES.exptitle>
              <ES.chevron >
                <StyledChevron className="icon__arrow-up">
                </StyledChevron>

              </ES.chevron>
            </ES.expListWrapper>
          );
        })}
        <Button type="disc" bgCuloare="#50d166" icon="icon__arrow-down" />
      </WS.WelcomeWrapper>
    );
  
  }


;
