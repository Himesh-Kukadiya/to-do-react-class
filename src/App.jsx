import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ToDo from "./components/ToDo";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const lendingPage = (
      <>
        <Home />
        <ToDo />
        <About />
        <Contact />
      </>
    );
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={lendingPage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}