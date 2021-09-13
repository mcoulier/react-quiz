import styled from "styled-components";

export const Button = styled.button`
  margin-top: 5px;
  background: ${(props) => props.theme.colors.secondary};
  width: 220px;
  height: 80px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: larger;
  &:hover {
    cursor: pointer;
    background: #d86c29;
  }
  &:focus {
    background: #d86c29;
    border: 4px solid #d84f29;
  }
`;
