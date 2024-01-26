import React from "react";
import { Row, Col, Hidden, Container } from "react-awesome-styled-grid";
import { Button } from "../Button";
import styled from "styled-components";

const StyledContainer = styled(Container)``;

export const Nav = () => {
  return (
    <StyledContainer as="nav">
      <Row style={{ height: 80 }}>
        <Col
          align={{ xs: "center", sm: "flex-start" }}
          justify="center"
          xs={4}
          sm={4}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/svg/logo.svg`}
            width={200}
            alt="Logo Mangá Xpress"
          />
        </Col>
        <Hidden xs>
          <Col align="end" justify="center">
            <a href="#download">
              <Button>Baixar agora</Button>
            </a>
          </Col>
        </Hidden>
      </Row>
    </StyledContainer>
  );
};
