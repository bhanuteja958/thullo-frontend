import React from 'react';
import AddBoard from './components/AddBoard/AddBoard';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App:React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Home />
      <AddBoard />
    </>
    
  )
};

export default App;
