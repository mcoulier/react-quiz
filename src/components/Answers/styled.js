import styled, { keyframes } from "styled-components";
import { Button } from "../../styles/Button";

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AnswerButton = styled(Button)`
  animation: ${fade} 0.5s linear;
  &:focus {
    background: ${(props) => props.theme.colors.secondary};
    border: none;
  }
`;
