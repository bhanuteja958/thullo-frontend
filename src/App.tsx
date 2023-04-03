import React from 'react';
import AddBoard from './components/AddBoard/AddBoard';
import Header from './components/Header/Header';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import UserProfile from './pages/UserProfile/UserProfile';

const App:React.FC<{}> = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <AddBoard /> */}
      {/* <Board /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <UserProfile />
    </>
    
  )
};

export default App;
