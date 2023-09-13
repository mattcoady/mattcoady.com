import styled from "styled-components";
import { FC, ReactNode } from "react";

const Aside = styled.aside`
  width: 200px;
  height: 100%;
  background-color: #17181b;
`;

const Link: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <button>{children}</button>;
};

export const Sidebar = () => {
  return (
    <Aside>
      <Link>Home</Link>
      <Link>About</Link>
    </Aside>
  );
};
