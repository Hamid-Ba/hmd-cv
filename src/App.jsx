import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import BackToTop from "./components/BackToTop/BackToTop";
import SkillsList from "./components/Skill/SkillsList";
import ProjectList from "./components/Project/ProjectList";

const App = () => {
  const social = {
    github: "https://github.com/Hamid-Ba",
    linkdin: "https://linkedin.com/in/hamid-balalzadeh",
    quera: "https://quera.org/profile/HamidBa",
    instagram: "",
  };

  const contact = {
    full_name: "حمید بلال زاده",
    phone: "09151498722",
    email: "balalzadehhamid79@gmail.com",
    address: "سیستان و بلوچستان - زاهدان",
  };

  return (
    <>
      <Navbar />
      <Landing social={social} />
      <About />
      <SkillsList />
      <ProjectList />
      <Contact social={social} contact={contact} />
      <BackToTop />
    </>
  );
};

export default App;
