import React from "react";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
