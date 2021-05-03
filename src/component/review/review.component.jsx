import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { WelcomeWrapper } from "../open/open.styled";
import { images } from "../../constanta/images";
import { Description, ImgS, Name, Selfie, Wrapp } from "../recomandation/recomandation.styled";
import { Date } from "./review.style";

export const Review = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3800/reviews")
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
      {data?.cards.map((a) => {
        return (
          <div>
            <Wrapp>
              <ImgS>
                <Selfie image={images[trimIconPath(a.avatarUrl)]} />
              </ImgS>
              <Name>{a.name}</Name>
              <Date>{a.date}</Date>
            </Wrapp>
            <Description>{a.description}</Description>
          </div>
        );
      })}
    </WelcomeWrapper>
  );
};
