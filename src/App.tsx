import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Switch from "./components/switch/Switch";
import Language from "./components/language/Language";
import { Preloader } from "./components/preloader/Preloader";

import "./App.css";
import { routeData } from "./utilities/datas";

const App = () => {
  const routeDataMap = routeData.map((r) => (
    <Route
      key={r.id}
      path={r.path}
      element={<Suspense fallback={<Preloader />}>{r.file}</Suspense>}
    />
  ));
  return (
    <HashRouter>
      <div className="App">
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <h2 className="counter">
          <Language />
          <Switch />
        </h2>
        <Routes>{routeDataMap}</Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
