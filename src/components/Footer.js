import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <Div26>PlanPal</Div26>
    );
}
const Div26 = styled.div`
  color: #fff;
  font-family: Lora, sans-serif;
  font-size: 48px;
  font-weight: 700;
  align-self: stretch;
  text-wrap: nowrap;
  background-color: #68627b;
  margin-top: 65px;
  width: 100%;
  padding-top: 34px;
  padding-right: 20px;
  padding-bottom: 158px;
  padding-left: 20px;
  @media (max-width: 991px) {
    font-size: 40px;
    text-wrap: initial;
    max-width: 100%;
  }
`;


export default Footer;
