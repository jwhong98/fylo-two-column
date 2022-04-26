import React from "react";
import { CardContainer, Source, Info } from "./QuoteCardElements";
import quote from "../../images/icon-quotes.svg";
import profile from "../../images/avatar-testimonial.jpg";

const QuoteCard = () => {
  return (
    <CardContainer>
      <img src={quote} alt="" />
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <Source>
        <img src={profile} alt="" />
        <Info>
          <span>Kyle Burton</span>
          <p>Founder & CEOm Huddle</p>
        </Info>
      </Source>
    </CardContainer>
  );
};

export default QuoteCard;
