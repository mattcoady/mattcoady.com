// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar, Main } from "./components";
import { Home } from "./components/subsections/Home.tsx";

export const App = () => (
  <>
    <Sidebar />
    <Main>
      <Home />
    </Main>
  </>
);
