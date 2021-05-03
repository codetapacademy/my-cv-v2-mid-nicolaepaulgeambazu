import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Header } from "../header";
import { Box, Titlu } from "../open/open.styled";
import { WelcomeWrapper } from "../welcome/welcome.style";
import { Little, Title, Subt, Icons} from "./portofolio.styled";
import { images } from "../../constanta/images";

export const Portofolio = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3800/portfolio")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const trimLogo = (str) => {
    const strArr = str.split("/");
    return strArr[strArr.length - 1].split(".")[0];
  };

  return (
    <>
    <WelcomeWrapper>
      <Header title={data?.sectionTitle} />
      <Little>{data?.header}</Little>
      <div>
        {data?.card1.map((cards) =>{
          const {title, skills, link, image, linkIcon, icon1, icon2} = cards;
          return (
            <Box>
              <Title>{title}</Title> 
              <Subt>{skills}</Subt> 
              <Icons logo={images[trimLogo(image)]}/>
            </Box>
              
          )
        }


        )}
      </div>
    <Button type="disc" bgculoare="#50d166">
    <span className="icon__arrow-down"/>
  </Button>
    </WelcomeWrapper>
  </>
  );
};
