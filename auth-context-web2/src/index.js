import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {AuthContext} from "./ContextApi/AuthContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContext>

    <App />
    </AuthContext>
  </StrictMode>,
  rootElement
);
