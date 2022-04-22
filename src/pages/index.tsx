/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Container, Hero } from "../styles/pages/homeStyles";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero>
        Heros
        {/* <img src="/images/hero.png" alt="Logo" /> */}
      </Hero>
    </Container>
  );
};

export default Home;
