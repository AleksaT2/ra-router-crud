import { useState } from 'react';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
