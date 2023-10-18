import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <Div2>PlanPal</Div2>
    );
}
const Div2 = styled.div`
  color: #000;
  font-family: Lora, sans-serif;
  font-size: 48px;
  font-weight: 700;
  align-self: stretch;
  text-wrap: nowrap;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0px -3px 21px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  width: 100%;
  padding-top: 34px;
  padding-right: 20px;
  padding-bottom: 19px;
  padding-left: 20px;
  @media (max-width: 991px) {
    font-size: 40px;
    text-wrap: initial;
    max-width: 100%;
  }
`
;

export default Header;
