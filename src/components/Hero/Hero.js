import React from "react";
import {
  HeroContainer,
  HeroWrap,
  TextContent,
  ImgContainer,
  HeroImg,
} from "./HeroElements";
import img from "../../images/illustration-1.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrap>
        <TextContent>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
        </TextContent>
        <ImgContainer>
          <HeroImg src={img} />
        </ImgContainer>
      </HeroWrap>
    </HeroContainer>
  );
};

export default Hero;
