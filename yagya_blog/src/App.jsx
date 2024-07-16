import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NewsLetter from "./pages/NewsLetter";
import Badges from "./pages/Badges";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/newsletters" element={<NewsLetter />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
