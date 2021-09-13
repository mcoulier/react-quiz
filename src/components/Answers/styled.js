import styled from "styled-components";
import { Button } from "../../styles/Button";

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnswerButton = styled(Button)`
  &:focus {
    background: ${(props) => props.theme.colors.secondary};
    border: none;
  }
/*   &:hover {
    background: #d86c29;
  } */
`;
