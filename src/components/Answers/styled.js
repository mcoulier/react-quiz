import styled, { keyframes } from "styled-components";
import { Button } from "../../styles/Button";

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & :last-child {
    margin-bottom: 20px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AnswerButton = styled(Button)`
  animation: ${fadeIn} 0.5s linear;
`;
