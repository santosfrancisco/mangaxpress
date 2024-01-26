import styled from "styled-components";
import { theme } from "../styles";
import { CustomHead } from "../components/CustomHead";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { What } from "../components/What";
import { Download } from "../components/Download";
import { Social } from "../components/Social";
import { Footer } from "../components/Footer";

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
`;

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export default function Home() {
  return (
    <StyledWrapper>
      <CustomHead />
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
          /* color: ${theme.colors.onBackground}; */
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
      <Nav />
      <StyledMain>
        <Hero />
        <What />
        <Download />
        <Social />
      </StyledMain>
      <Footer />
    </StyledWrapper>
  );
}
