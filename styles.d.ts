import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      onBackground: string;
      primary: string;
      secondary: string;
      info: string;
      error: string;
      success: string;
      warning: string;
      input: {
        labelColor: string;
        placeholderColor: string;
        textColor: string;
        borderColor: string;
        backgroundColor: string;
      };
      button: {
        primary: {
          textColor: string;
          backgroundColor: string;
          borderColor: string;
        };
        secondary: {
          textColor: string;
          backgroundColor: string;
          borderColor: string;
        };
        critical: {
          textColor: string;
          backgroundColor: string;
          borderColor: string;
        };
        neutral: {
          textColor: string;
          backgroundColor: string;
          borderColor: string;
        };
      };
    };
  }
}
