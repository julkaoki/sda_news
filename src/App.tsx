import React, { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {

const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
console.log(avatarClicked);

  return (
    <div className="App">
      <NavBar avatarClicked={avatarClicked} setAvatarClicked={setAvatarClicked} />
      <HomePage />

    </div>
  );
}

export default App;
