import React from "react";
import { Content } from "../content/Content";
import { Footer } from "../footer/Footer";
import { Header } from "../navigation/Header";
import styled from "styled-components";

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Application = () => {
  return (
    <PageContainer>
      <Header />
      <Content />
      <Footer />
    </PageContainer>
  );
};
