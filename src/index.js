import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Post1 from "./components/PostDetailed/Post1";
import Post2 from "./components/PostDetailed/Post2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post1" element={<Post1 />} />
        <Route path="/post2" element={<Post2/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
