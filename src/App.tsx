import React, { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Switch from './components/switch/Switch'
import Language from './components/language/Language'
import { Preloader } from './components/preloader/Preloader'

import './App.css'

const Header = lazy(() => import('./components/header/Header'))
const Resume = lazy(() => import('./components/resume/Resume'))
const Skills = lazy(() => import('./components/skills/Skills'))
const Project = lazy(() => import('./components/project/Project'))
const Contact = lazy(() => import('./components/contact/Contact'))

const App = () => {
  return (
    <HashRouter>
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
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Preloader />}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
