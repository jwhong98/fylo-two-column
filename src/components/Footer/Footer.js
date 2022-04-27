import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterContent,
  FooterInfo,
  FooterList,
  ListItem,
  Socials,
} from "./FooterElements";
import logo from "../../images/logo2.svg";
import phone from "../../images/icon-phone.svg";
import email from "../../images/icon-email.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <img src={logo} alt="" />
        <FooterContent>
          <FooterInfo>
            <p>
              <img src={phone} alt="" /> Phone: +1-543-123-4567
            </p>
            <p>
              {" "}
              <img src={email} alt="" /> example@fylo.com
            </p>
          </FooterInfo>
          <FooterList>
            <ListItem>
              <a href="/">about us</a>
            </ListItem>
            <ListItem>
              <a href="/">jobs</a>
            </ListItem>
            <ListItem>
              <a href="/">press</a>
            </ListItem>
            <ListItem>
              <a href="/">blog</a>
            </ListItem>
          </FooterList>
          <FooterList>
            <ListItem>
              <a href="/">contact us</a>
            </ListItem>
            <ListItem>
              <a href="/">terms</a>
            </ListItem>
            <ListItem>
              <a href="/">privacy</a>
            </ListItem>
          </FooterList>
          <Socials></Socials>
        </FooterContent>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
