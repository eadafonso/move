/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";

import { Container, Hero } from "../styles/pages/homeStyles";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero>
        <Header />

        <div className="heading">
          <h1>
            <span>Move ON,</span> entreterimento <br /> mais próximo de si.
          </h1>

          <h2>
            Seus filmes, seriados e sessões infantis ficou mais fácil. <br />
            Com o Move ON, explore o entreterimento mais próximo.
          </h2>

          <span>Acesse para poder assisitir</span>
        </div>
      </Hero>
    </Container>
  );
};

export default Home;
