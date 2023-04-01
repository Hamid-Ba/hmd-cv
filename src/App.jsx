import React from "react";
import './App.css'
import Home from "./components/Home"
import PostList from "./components/Blog/PostList"
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Layout from "./components/Layout";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>}></Route>
          <Route path="blog" element={<PostList/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
