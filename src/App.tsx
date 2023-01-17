import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {

const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
console.log(avatarClicked);

  return (
    <div className="App">
      <BrowserRouter>
      {/* STATIC */}
        <NavBar avatarClicked={avatarClicked} setAvatarClicked={setAvatarClicked} />
      {/* DYNAMIC */}
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={"Pusty url"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
