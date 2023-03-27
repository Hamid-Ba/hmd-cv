import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const social = {
  github : "https://github.com/Hamid-Ba",
  linkdin : "https://linkedin.com/in/hamid-balalzadeh",
  quera : "https://quera.org/profile/HamidBa"
}

root.render(
  <React.StrictMode>
    <Navbar />
    <Landing social={social}/>
    <About/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
