import styled from "styled-components";

export const QuestionText = styled.h2`
  color: whitesmoke;
  text-align: center;
  text-shadow: 1px 2px 2px ${(props) => props.theme.colors.primary};
  margin-left: 20px;
  margin-right: 20px;
`;
