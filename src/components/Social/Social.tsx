import React from "react";
import { Col, Container, Row, config } from "react-awesome-styled-grid";
import styled from "styled-components";
import { colors, theme } from "../../styles";

const SocialContainer = styled(Container)`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  gap: 2rem;
  background-color: ${theme.colors.backgroundSecondary};
`;

const Title = styled.h2`
  line-height: 110%;
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.onBackground};
  padding-bottom: 24px;

  ${(props) => config(props).media["sm"]`
    font-size: 3rem;
  `}
`;

const Description = styled.p`
  text-align: center;
  color: ${theme.colors.onBackground};
  line-height: 120%;
  font-size: 1.125rem;
  padding-bottom: 24px;
`;

const Orange = styled.span`
  a {
    color: ${theme.colors.primary};
    &:visited {
      color: ${colors.darkOrange[700]};
    }
  }
`;

export const Social = () => {
  return (
    <SocialContainer as="section">
      <Row reverse={["xs"]}>
        <Col xs={4} sm={4}>
          <div>
            <Title>Participe!</Title>
          </div>
          <div>
            <Description>
              Tem alguma sugestão, encontrou algum problema ou quer apenas bater
              um papo? Acesse nosso Discord{" "}
              <Orange>
                <a href="https://discord.gg/pex4ZgSerT" target="_blank">
                  https://discord.gg/pex4ZgSerT
                </a>
              </Orange>
            </Description>
          </div>
        </Col>
        <Col align="center" justify="center" xs={4} sm={4}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/manga-xpress-logo.png`}
            width={164}
            alt="Logo Mangá Xpress"
          />
        </Col>
      </Row>
    </SocialContainer>
  );
};
