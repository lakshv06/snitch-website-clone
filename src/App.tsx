import { ReactElement } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import NavHeader from './pages/NavigationHeader';

function App() : ReactElement {
  return (
   <BrowserRouter>
   <NavHeader />
   <Routes>
    <Route path="" element={<SignInPage />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
