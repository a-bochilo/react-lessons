import React from "react";
import { Routes } from "react-router-dom";
import { Route, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPge";
import Layout from "./pages/Layout";
import Frameworks from "./components/Frameworks";

import PostPage from "./components/PostsPage";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PostPage />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
