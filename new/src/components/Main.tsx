import { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  flex-grow: 1;
  background-image: url("/img/bg${Math.floor(Math.random() * 3) + 1}.jpg");
  background-size: cover;
`;

export const Main: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
