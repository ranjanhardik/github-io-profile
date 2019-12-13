import React from "react";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Introduction from "./components/Introduction";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import RecentWork from "./components/RecentWork";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Introduction />
      <AboutMe />
      <Expertise />
      <RecentWork />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
