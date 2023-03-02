import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  background-color: #ffec5c;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

export const Button = styled.button`
  padding: 2rem;
  width: 10rem;
  border-radius: 0.5rem;
  background-color: #ff5a33;
  border: none;
  cursor: pointer;
  /* ... */
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  /* ... */
`;
