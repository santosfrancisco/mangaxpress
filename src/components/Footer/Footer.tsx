import React from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import { colors, theme } from "../../styles";
import styled, { css } from "styled-components";

const FooterContainer = styled(Container)`
  max-height: 120px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Copyright = styled.p`
  text-align: center;
  color: ${theme.colors.onBackground};
  line-height: 120%;
  font-size: 1rem;
  margin-top: 1.5rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Col align="center">
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/svg/logo.svg`}
              width={164}
              alt="Logo Mangá Xpress"
            />
          </div>
          <div>
            <Copyright>
              &#169; {new Date().getFullYear()} Manga Xpress
            </Copyright>
          </div>
        </Col>
      </Row>
    </FooterContainer>
  );
};
