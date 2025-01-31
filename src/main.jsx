import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Foodcategoriespage from "./pageLayout/Foodcategoriespage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Foodcategoriespage></Foodcategoriespage>
  </StrictMode>
);
