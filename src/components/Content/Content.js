import React from "react";
import img from "../../images/illustration-2.svg";
import {
  ContentContainer,
  ContentWrapper,
  ContentText,
  ContentImg,
} from "./ContentElements";
import QuoteCard from "./QuoteCard";

const Content = () => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <ContentText>
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo had
            you covered for all of you file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <a href="/">See how Fylo works</a>
          <QuoteCard />
        </ContentText>
        <ContentImg>
          <img src={img} alt="" />
        </ContentImg>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
