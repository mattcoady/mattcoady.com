import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Home = () => {
  return (
    <Wrapper>
      <img src="./img/slide1.png" alt="" />
    </Wrapper>
  );
};
