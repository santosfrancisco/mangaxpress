import React from "react";
import { Row, Col, config, Container } from "react-awesome-styled-grid";
import styled from "styled-components";
import { radius, theme } from "../../styles";
import { Button } from "../Button";
import { useDatabase } from "../../context/databaseContext";

const StyledRow = styled(Row)`
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 24px;
  ${(props) => config(props).media["sm"]`
    gap: 0;
  `}
`;

const ImagesContainer = styled.div`
  display: flex;
  max-width: 100%;
  overflow: hidden;
  /* transform: rotate(45deg); */

  ${(props) => config(props).media["sm"]`
      flex-direction: row;
      // transform: none;

  `}
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

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  ${(props) => config(props).media["sm"]`
    flex-direction: row;

  `}
`;

const VersionText = styled.span`
  color: ${theme.colors.onBackground};
  font-size: 1.125rem;
`;

export const Download = () => {
  const { database, isLoading } = useDatabase();

  return (
    <Container id="download" as="section">
      <StyledRow>
        <Col align="center" xs={4} sm={4}>
          <ImagesContainer>
            <img
              style={{
                marginBottom: 80,
                width: "50%",
              }}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/screen-2.png`}
              alt="Logo Mangá Xpress"
            />
            <img
              style={{
                marginTop: 80,
                width: "50%",
              }}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/screen-3.png`}
              alt="Logo Mangá Xpress"
            />
          </ImagesContainer>
        </Col>
        <Col xs={4} sm={4} justify="center">
          <div>
            <Title>
              No momento só temos o app disponível para a plataforma Android
            </Title>
          </div>
          <div>
            <Description>
              Mas não se preocupe, em breve teremos uma versão para iOS!
            </Description>
          </div>
          <ActionContainer>
            {isLoading || !database ? (
              "carregando..."
            ) : (
              <>
                <a href={database?.latest?.link} download>
                  <Button>Baixar agora</Button>
                </a>
                <VersionText>Versão: {database?.latest?.version}</VersionText>
              </>
            )}
          </ActionContainer>
        </Col>
      </StyledRow>
    </Container>
  );
};
