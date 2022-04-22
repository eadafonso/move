/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Container, LogoContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src="/images/icones/Logo.svg" alt="Move On" />
      </LogoContainer>
    </Container>
  );
};

export default Header;
