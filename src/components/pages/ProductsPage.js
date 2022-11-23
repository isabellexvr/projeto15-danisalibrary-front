import styled from "styled-components";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useState } from "react";

export default function ProductsPage() {
  return (
    <PageStyle>
      <Header />
      <Sidebar/>
    </PageStyle>
  );
}

const PageStyle = styled.div`
  margin-top: 17vh;
`;
