import styled from "styled-components";

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TopItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`;

export const Score = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #a51a90;
`;

export const Heart = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 3px;
`;

export const Feedback = styled.img`
  width: 48px;
  height: 48px;
`;
