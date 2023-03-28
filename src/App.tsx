import React from 'react';
import AddBoard from './components/AddBoard/AddBoard';
import Header from './components/Header/Header';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

const App:React.FC<{}> = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <AddBoard /> */}
      <Board />
    </>
    
  )
};

export default App;
