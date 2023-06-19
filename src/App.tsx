import React from 'react';
import './App.css';
import Home from './page-components/Home';
import SignUp from './page-components/SignUp';
import Login from './page-components/Login';
import DetailsStory from './page-components/DetailsStory';
import { Route, Routes } from 'react-router-dom'
import NotFound from './page-components/NotFound';
import SubmitStory from './page-components/SubmitStory';

function App() {
  return (
    <div className="App">
      {/* <SubmitStory /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/DetailsStory/:headLineURL" element={<DetailsStory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </div>
  );
}

export default App;