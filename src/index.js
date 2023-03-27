import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const social = {
  github : "https://github.com/Hamid-Ba",
  linkdin : "https://linkedin.com/in/hamid-balalzadeh",
  quera : "https://quera.org/profile/HamidBa",
  instagram : ""
}

const contact = {
  full_name : "حمید بلال زاده",
  phone : "09151498722",
  email : "balalzadehhamid79@gmail.com",
  address : "سیستان و بلوچستان - زاهدان"
}

root.render(
  <React.StrictMode>
    <Navbar />
    <Landing social={social}/>
    <About/>
    <Contact social={social} contact={contact}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
