import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Post from "./components/PostDetailed/I-tried-12-flavours-of-mountain-dew"
import Post2 from "./components/PostDetailed/Why_Free_Speech_Isnt_An_Excuse";
import Blog from "./Pages/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/I-tried-12-flavours-of-mountain-dew" element={<Post/>} />
        <Route path="/Why_Free_Speech_Isnt_An_Excuse" element={<Post2/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
