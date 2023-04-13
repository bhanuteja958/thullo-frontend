import React, { Reducer, useReducer } from 'react';
import Header from './components/Header/Header';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Board from './pages/Board/Board';
import UserProfile from './pages/UserProfile/UserProfile';
import GlobalContext from './store/GlobalContext';
import { GlobalReducer, initialState } from './store/GlobalReducer';
import { ReducerAction } from './config/types';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'signin',
    element: <Login />
  },
  {
    path:'signup',
    element: <SignUp />
  },
  {
    path: '/board/:boardId',
    element: <Board />
  },
  {
    path: 'profile',
    element: <UserProfile />
  }
])

const App:React.FC<{}> = () => {
  const [state, dispatch] = useReducer<Reducer<any, ReducerAction>>(GlobalReducer, initialState);
  
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <Header />
      <RouterProvider router={router} />
    </GlobalContext.Provider>
    
  )
};

export default App;
