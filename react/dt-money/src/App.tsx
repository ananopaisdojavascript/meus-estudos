import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/styles"


export function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </React.Fragment>
  );
}
