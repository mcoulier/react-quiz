import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border: 4px solid ${(props) => props.theme.colors.secondary};
  border-top: 4px solid whitesmoke;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;
