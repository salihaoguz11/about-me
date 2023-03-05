import styled from "styled-components";
import { Link } from "react-router-dom";
export const Div = styled.div`
  background-color: #b4cf66;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Links = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ff5a33;

    transition: all 1s ease;
    transform: scale(1.2);
  }
`;
