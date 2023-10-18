import * as React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function PollPageTimes() {
  return (
    <Div>
      <Div3>
        <Div4>Nice! Now suggest some times</Div4>
        <Div5>
          <Div6>
            <Div7>Select times for : Friday</Div7>
            <Div8>
              <Div9>Add Time (optional)</Div9>
              <Div10>
                <Div11>- Select -</Div11>
                <Img
                  loading="lazy"
                  srcSet="..."
                />
              </Div10>
            </Div8>
            <Div12>
              <Div13>Add Time (optional)</Div13>
              <Div14>
                <Div15>- Select -</Div15>
                <img
                  loading="lazy"
                  srcSet="..."
                />
              </Div14>
            </Div12>
            <Div16>
              <Img3
                loading="lazy"
                srcSet="..."
              />
              <Div17>Allow multiple answers</Div17>
            </Div16>
          </Div6>
        </Div5>
        <Div18>
          <Div19>
            <Div20>Select times for : Saturday</Div20>
            <Div21>
              <Div22>Add Time (optional)</Div22>
              <Div23>
                <Div24>- Select -</Div24>
                <img
                  loading="lazy"
                  srcSet="..."
                />
              </Div23>
            </Div21>
            <Div25>
              <Div26>Add Time (optional)</Div26>
              <Div27>
                <Div28>- Select -</Div28>
                <img
                  loading="lazy"
                  srcSet="..."
                />
              </Div27>
            </Div25>
            <Div29>
              <Img6
                loading="lazy"
                srcSet="..."
              />
              <Div30>Allow multiple answers</Div30>
            </Div29>
          </Div19>
        </Div18>
        <Div31>
          <Div32>
            <Div33>Select times for : Sunday</Div33>
            <Div34>
              <Div35>Add Time (optional)</Div35>
              <Div36>
                <Div37>- Select -</Div37>
                <img
                  loading="lazy"
                  srcSet="..."
                />
              </Div36>
            </Div34>
            <Div38>
              <Div39>Add Time (optional)</Div39>
              <Div40>
                <Div41>- Select -</Div41>
                <img
                  loading="lazy"
                  srcSet="..."
                />
              </Div40>
            </Div38>
            <Div42>
              <Img9
                loading="lazy"
                srcSet="..."
              />
              <Div43>Allow multiple answers</Div43>
            </Div42>
          </Div32>
        </Div31>
        <Div44>
          <Link to="/polldays">
          <Div45>Back</Div45>
          </Link>
          <Div46>
            <Div47>
              <Link to="/pollcreate">
              <Div48>Next</Div48>
              </Link>
              <Img10
                loading="lazy"
                srcSet="..."
              />
            </Div47>
          </Div46>
        </Div44>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
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
    max-width: 100%;
    text-wrap: initial;
  }
`;

const Div5 = styled.div`
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 64px;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 32px;
  padding-left: 20px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 29px;
  width: 556px;
  max-width: 100%;
  flex-direction: column;
`;

const Div7 = styled.div`
  color: #000;
  font-family: Lora, sans-serif;
  font-size: 24px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div8 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
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

const Div10 = styled.div`
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

const Div11 = styled.div`
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

const Div12 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div13 = styled.div`
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

const Div14 = styled.div`
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

const Div15 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: stretch;
`;

const Div16 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 32px;
  width: 220px;
  max-width: 100%;
  gap: 10px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 24px;
  fill: #fff;
  stroke-width: 1px;
  stroke: #9b7dff;
  overflow: hidden;
`;

const Div17 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: stretch;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div18 = styled.div`
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 64px;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 32px;
  padding-left: 20px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div19 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 29px;
  width: 556px;
  max-width: 100%;
  flex-direction: column;
`;

const Div20 = styled.div`
  color: #000;
  font-family: Lora, sans-serif;
  font-size: 24px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div21 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div22 = styled.div`
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

const Div23 = styled.div`
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

const Div24 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: stretch;
`;

const Div25 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div26 = styled.div`
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

const Div27 = styled.div`
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

const Div28 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: stretch;
`;

const Div29 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 32px;
  width: 220px;
  max-width: 100%;
  gap: 10px;
`;

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 24px;
  fill: #fff;
  stroke-width: 1px;
  stroke: #9b7dff;
  overflow: hidden;
`;

const Div30 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: stretch;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div31 = styled.div`
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 64px;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 32px;
  padding-left: 20px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div32 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 29px;
  width: 556px;
  max-width: 100%;
  flex-direction: column;
`;

const Div33 = styled.div`
  color: #000;
  font-family: Lora, sans-serif;
  font-size: 24px;
  font-weight: 500;
  align-self: start;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div34 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div35 = styled.div`
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

const Div36 = styled.div`
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

const Div37 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: stretch;
`;

const Div38 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div39 = styled.div`
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

const Div40 = styled.div`
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

const Div41 = styled.div`
  color: #68627b;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-self: stretch;
`;

const Div42 = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 32px;
  width: 220px;
  max-width: 100%;
  gap: 10px;
`;

const Img9 = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 24px;
  fill: #fff;
  stroke-width: 1px;
  stroke: #9b7dff;
  overflow: hidden;
`;

const Div43 = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self: stretch;
  text-wrap: nowrap;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div44 = styled.div`
  align-self: end;
  display: flex;
  margin-top: 64px;
  width: 704px;
  max-width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div45 = styled.div`
  color: #000;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 500;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const Div46 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #fff37d;
  align-self: stretch;
  display: flex;
  width: 165px;
  max-width: 100%;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  flex-direction: column;
`;

const Div47 = styled.div`
  align-self: center;
  display: flex;
  margin-left: 6px;
  width: 89px;
  max-width: 100%;
  align-items: flex-start;
  gap: 20px;
`;

const Div48 = styled.div`
  color: #000;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 500;
  align-self: stretch;
`;

const Img10 = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

