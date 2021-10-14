import styled, { keyframes } from "styled-components";
import { Button } from "../../styles/Button";

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & :last-child {
    margin-bottom: 20px;
  }
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
`;
