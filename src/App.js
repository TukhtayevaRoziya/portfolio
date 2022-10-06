import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Switch from "./components/Switch/Switch";
import Language from "./components/Language/Language";
import { Preloader } from "./components/preloader/Preloader";

import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Project = lazy(() => import("./components/Project/Project"));

const App = () => {
  return (
    <div className="App">
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <h2 className="counter">
        <Language />
        <Switch />
      </h2>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Header />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<Preloader />}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<Preloader />}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="/project"
          element={
            <Suspense fallback={<Preloader />}>
              <Project />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
