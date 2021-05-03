import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { WelcomeWrapper } from "../open/open.styled";

import { images } from "../../constanta/images";
import { Selfie, ImgS, Wrapp, Job, Description, Name} from "./recomandation.styled";

export const Recomandation = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3800/recommendations")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const trimIconPath = (str) => {
    const strArr = str.split("/");
    return strArr[strArr.length - 1].split(".")[0];
  };

  return (
    <WelcomeWrapper>
      <Header title={data?.sectionTitle} />
      {data?.recommendations1.map((h) => {
        return (
          <div>
            <Wrapp>
              <ImgS>
                <Selfie image={images[trimIconPath(h.avatarUrl)]} />
              </ImgS>
              <Name>{h.name}</Name>
              <Job>{h.position}</Job>
            </Wrapp>
            <Description>{h.description}</Description>
          </div>
        );
      })}
      {data?.recommendations2.map((h) => {
        return (
          <div>
            <Wrapp>
              <ImgS>
                <Selfie image={images[trimIconPath(h.avatarUrl)]} />
              </ImgS>
              <Name>{h.name}</Name>
              <Job>{h.position}</Job>
            </Wrapp>
            <Description>{h.description}</Description>
          </div>
        );
      })}
    </WelcomeWrapper>
  );
};
