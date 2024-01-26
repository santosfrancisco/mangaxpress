import React from "react";
import { Row, Col, config, Container } from "react-awesome-styled-grid";
import styled from "styled-components";
import { theme } from "../../styles";

const StyledContainer = styled(Container)`
  background-color: ${theme.colors.backgroundSecondary};
  padding-top: 12px;
  padding-bottom: 12px;
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

const SubTitle = styled.h3`
  line-height: 110%;
  font-size: 1.875rem;
  text-align: center;
  color: ${theme.colors.onBackground};
  padding-bottom: 24px;
`;

const Description = styled.p`
  text-align: center;
  color: ${theme.colors.onBackground};
  line-height: 120%;
  font-size: 1.125rem;
  padding-bottom: 24px;
`;

export const What = () => {
  return (
    <StyledContainer as="section">
      <Row>
        <Col align="center">
          <Title>O que o Manga Xpress oferece?</Title>
        </Col>
      </Row>
      <Row>
        <Col align="center" xs={4} sm={8 / 3}>
          <SubTitle>Histórico de leitura</SubTitle>
          <Description>
            O App salva seu progresso de leitura de cada mangá para que você
            continue sempre de onde parou.
          </Description>
        </Col>
        <Col align="center" xs={4} sm={8 / 3}>
          <SubTitle>Lista de favoritos</SubTitle>
          <Description>
            Salve seus mangás favoritos em uma lista para que possa ler depois.
          </Description>
        </Col>
        <Col align="center" xs={4} sm={8 / 3}>
          <SubTitle>Opções de leitura</SubTitle>
          <Description>
            Você pode escolher o idioma de leitura (Inglês ou Português do
            Brasil), a direção de leitura (cima para baixo, esquerda pra direita
            ou da direita para a esquerda, como no mangá japonês original).
          </Description>
        </Col>
      </Row>
    </StyledContainer>
  );
};
