import { useDatabase } from "../context/databaseContext";
import styled from "styled-components";
import { theme } from "../styles";
import { CustomHead } from "../components/CustomHead";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
`;

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  line-height: 110%;
  font-size: 3rem;
  text-align: center;
  color: ${theme.colors.onBackground};
  padding-bottom: 24px;

  @media (min-width: 600px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  text-align: center;
  color: ${theme.colors.onBackground};
  line-height: 120%;
  font-size: 1.5em;
  padding-bottom: 24px;
`;

const StyledLink = styled.a`
  color: ${theme.colors.onBackground};
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Copyright = styled.p`
  text-align: center;
  color: ${theme.colors.onBackground};
  line-height: 120%;
  font-size: 1.2em;
`;

export default function Home() {
  const { database, isLoading } = useDatabase();

  return (
    <Container>
      <CustomHead />
      <StyledMain>
        <Title>Mangá Xpress App</Title>
        <Description>Seus mangás preferidos na palma da sua mão!</Description>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/manga-xpress-logo.png`}
          alt="Logo Mangá Xpress"
          width={220}
        />
      </StyledMain>
      <StyledFooter>
        <StyledLink href={database?.latest?.link} download>
          {isLoading || !database
            ? "carregando..."
            : `Baixar a versão ${database?.latest?.version} para Android`}
        </StyledLink>
        <Copyright>&#169; {new Date().getFullYear()} Manga Xpress</Copyright>
      </StyledFooter>

      <style jsx>{`
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        /* http://meyerweb.com/eric/tools/css/reset/ 
          v2.0 | 20110126
          License: none (public domain)
        */

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
          /* font: inherit; */
          font-family: "Poppins", sans-serif;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}
