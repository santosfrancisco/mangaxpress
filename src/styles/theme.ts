import { DefaultTheme } from "styled-components";
import { colors } from "./colors";

const base = {
  background: colors.msuGreen[900],
  backgroundSecondary: colors.msuGreen[800],
  backgroundTertiary: colors.msuGreen[600],
  onBackground: colors.white[500],
  primary: colors.darkOrange[500],
  secondary: colors.skyDancer[400],
  info: colors.turquoise[500],
  error: colors.orangered[500],
  success: colors.mediumseagreen[500],
  warning: colors.goldenrod[500],
  ghost: colors.darkslategray[500],
};

export const theme: DefaultTheme = {
  colors: {
    background: base.background,
    backgroundSecondary: base.backgroundSecondary,
    onBackground: base.onBackground,
    primary: base.primary,
    secondary: base.secondary,
    info: base.info,
    error: base.error,
    success: base.success,
    warning: base.warning,
    input: {
      labelColor: colors.white[500],
      placeholderColor: colors.lightgrey[500],
      textColor: colors.white[500],
      borderColor: colors.msuGreen[700],
      backgroundColor: colors.msuGreen[700],
    },
    button: {
      primary: {
        textColor: colors.white[500],
        backgroundColor: base.primary,
        borderColor: colors.goldenrod[600],
      },
      secondary: {
        textColor: colors.white[500],
        backgroundColor: base.secondary,
        borderColor: colors.skyDancer[600],
      },
      critical: {
        textColor: colors.white[500],
        backgroundColor: base.error,
        borderColor: colors.orangered[600],
      },
      neutral: {
        textColor: colors.white[500],
        backgroundColor: base.ghost,
        borderColor: colors.darkslategray[600],
      },
    },
  },
};
