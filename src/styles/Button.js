import styled from "styled-components";

export const Button = styled.button`
  margin-top: 5px;
  background: ${(props) => props.theme.colors.secondary};
  width: 220px;
  height: 50px;
  border: none;
  border-radius: 45px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
    background: #751aa5;
  }
`;
