// bootstrapping
import {render} from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

render (
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);