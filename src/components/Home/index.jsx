import React from "react";
import SideBar from "../Sidebar";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Contact from "../Contact/Contact";
import BackToTop from "../BackToTop/BackToTop";
import SkillsList from "../Skill/SkillsList";
import ProjectList from "../Project/ProjectList";

const Home = () => {
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
      <Landing social={social} />
      <About />
      <SkillsList />
      <ProjectList />
      <Contact social={social} contact={contact} />
      <BackToTop />
    </>
  );
};

export default Home;
