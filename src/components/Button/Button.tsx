import styled from "styled-components";
import { theme, radius, colors } from "../../styles";

export const Button = styled.button`
  height: 56px;
  padding: 16px 24px;
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: ${radius.medium};

  font-size: 1.125rem;
  color: ${theme.colors.onBackground};
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkOrange[600]};
  }

  &:focus {
    background-color: ${colors.darkOrange[900]};
  }

  &:disabled {
    background-color: ${colors.white[600]};
    pointer-events: none;
  }
`;
