import styled from "styled-components";

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Score = styled.div`
  width: 25px;
  height: 25px;
  /*   &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.secondary};
  } */
`;
