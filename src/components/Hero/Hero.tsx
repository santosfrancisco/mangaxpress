import React from "react";
import {
  Row,
  Col,
  config,
  util,
  ScreenClass,
  Container,
} from "react-awesome-styled-grid";
import styled from "styled-components";
import { theme } from "../../styles";
import { Button } from "../Button";

const Title = styled.h1`
  font-feature-settings: "liga" off;
  /* Display xl/Bold */
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.5rem; /* 120% */
  letter-spacing: -0.09375rem;
  color: ${theme.colors.onBackground};
  padding-bottom: 24px;

  ${(props) => config(props).media["sm"]`
    // font-size: 3rem;

  `}
`;

const Description = styled.p`
  color: ${theme.colors.onBackground};
  font-feature-settings: "liga" off;
  /* Body lg/Regular */
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 155.556% */
`;

const Orange = styled.span`
  color: ${theme.colors.primary};
`;

const ImageLeft = styled.img`
  position: absolute;
  max-width: 100%;
  left: 0;
  bottom: 0px;
  filter: blur(20px);
`;
const ImageRight = styled.img`
  position: absolute;
  max-width: 100%;
  right: 0;
  bottom: 0;
  filter: blur(20px);
`;
const ImageCircles = styled.img`
  position: absolute;
  max-width: 100%;
  right: 0;
  bottom: 140px;
  filter: blur(40px);
`;

export const Hero = () => {
  return (
    <Container as="section">
      <Row
        justify="center"
        align="center"
        style={{ marginBottom: 100, minHeight: 740 }}
      >
        <ImageLeft src={`${process.env.NEXT_PUBLIC_BASE_PATH}/svg/Left.svg`} />
        <ImageRight
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/svg/Right.svg`}
        />
        <ImageCircles
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/svg/Circles.svg`}
        />
        <Col xs={4} sm={5} align="start" style={{ gap: 24, zIndex: 2 }}>
          <div>
            <Title>
              Seus mangás preferidos, na palma <Orange>da sua mão</Orange>
            </Title>
            <Description>
              Leia seus mangás preferidos em português e SEM ANÚNCIOS! O
              MangaXpress utiliza a base de dados do MangaDex que tem um enorme
              acervo e está sempre em atualização!
            </Description>
          </div>
          <div>
            <a href="#download">
              <Button>Baixar agora</Button>
            </a>
          </div>
        </Col>
        <Col
          align="center"
          justify="center"
          xs={4}
          sm={3}
          style={{ zIndex: 2 }}
        >
          <ScreenClass
            render={(screen) => (
              <img
                style={{
                  marginTop: 80,
                  marginBottom: 80,
                  width: screen === "xs" ? "90%" : 300,
                }}
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/screen-1.png`}
                alt="Logo Mangá Xpress"
              />
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};
