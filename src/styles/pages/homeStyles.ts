import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("/images/hero.png");

  background-repeat: repeat-x;
  //background-position: center center;
  background-size: cover;

  > .heading {
    h1 {
      font-size: 65px;
      font-weight: 500;
      text-align: center;

      > span {
        font-weight: bold;
      }
    }

    h2 {
      text-align: center;
      font-size: 18px;
      margin: 35px 0;
    }

    > span {
      display: block;
      text-align: center;
      font-weight: bold;
    }
  }
`;
