import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/LoginForm/LoginForm';
import LoginPage from './components/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import RegisterForm from './components/RegisterForm/RegisterForm';

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
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
