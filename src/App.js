import React from "react";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
