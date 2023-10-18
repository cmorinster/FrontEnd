import * as React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function PollPage() {
  return (
    <Div>
      <Div3>
        <Div4>Poll Details</Div4>
        <Div5>
          <Div6>
            <Div7>
              <Div8>Your Name*</Div8>
              <Div9>Your Name</Div9>
            </Div7>
            <Div10>
              <Div11>Your Email*</Div11>
              <Div12>Your Email</Div12>
            </Div10>
            <Div13>
              <Div14>Poll Name*</Div14>
              <Div15>Poll Name</Div15>
            </Div13>
            <Div16>
              <Div17>Time Zone (optional)</Div17>
              <Div18>
                <Div19>- Select -</Div19>
                <Img
                  loading="lazy"
                  srcSet="..."
                />
              </Div18>
            </Div16>
            <Div20>
              <Div21>Event Description (optional)</Div21>
              <Div22>Event Description (optional)</Div22>
            </Div20>
          </Div6>
        </Div5>
        <Div23>
        <Div24>
  <Link to="/polldays">
    <Div25>Next</Div25>
  </Link>
  <Img2
    loading="lazy"
    srcSet="..."
  />
</Div24>

        </Div23>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  background-color: #f7f9fc;
  display: flex;
  flex-direction: column;
`;

const Div3 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 73px;
  width: 748px;
  max-width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  flex-direction: column;
`;

const Div4 = styled.div`
  color: #000;
  font-family: Lora, sans-serif;
  font-size: 36px;
  font-weight: 700;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div5 = styled.div`
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 73px;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-left: 20px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 24px;
  margin-left: 25px;
  margin-bottom: 24px;
  width: 556px;
  max-width: 100%;
  flex-direction: column;
`;

const Div7 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div9 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: start;
  text-wrap: nowrap;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  margin-top: 4px;
  width: 100%;
  flex-grow: 1;
  padding-top: 12px;
  padding-right: 20px;
  padding-bottom: 11px;
  padding-left: 16px;
  @media (max-width: 991px) {
    text-wrap: initial;
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div11 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div12 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: start;
  text-wrap: nowrap;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  margin-top: 4px;
  width: 100%;
  flex-grow: 1;
  padding-top: 12px;
  padding-right: 20px;
  padding-bottom: 11px;
  padding-left: 16px;
  @media (max-width: 991px) {
    text-wrap: initial;
    max-width: 100%;
  }
`;

const Div13 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div14 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div15 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: start;
  text-wrap: nowrap;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  margin-top: 4px;
  width: 100%;
  flex-grow: 1;
  padding-top: 12px;
  padding-right: 20px;
  padding-bottom: 11px;
  padding-left: 16px;
  @media (max-width: 991px) {
    text-wrap: initial;
    max-width: 100%;
  }
`;

const Div16 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div18 = styled.div`
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  align-self: start;
  display: flex;
  margin-top: 4px;
  width: 100%;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div19 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: stretch;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 24px;
  overflow: hidden;
  margin-top: 1px;
`;

const Div20 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  margin-top: 16px;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div21 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div22 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: start;
  text-wrap: nowrap;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  margin-top: 4px;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
  padding-right: 20px;
  padding-bottom: 109px;
  padding-left: 16px;
  @media (max-width: 991px) {
    text-wrap: initial;
    max-width: 100%;
  }
`;

const Div23 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #fff37d;
  align-self: end;
  display: flex;
  margin-top: 66px;
  width: 165px;
  max-width: 100%;
  flex-grow: 1;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  flex-direction: column;
`;

const Div24 = styled.div`
  align-self: center;
  display: flex;
  margin-left: 6px;
  width: 89px;
  max-width: 100%;
  align-items: flex-start;
  gap: 20px;
`;

const Div25 = styled.div`
  color: #000;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 500;
  align-self: stretch;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;


