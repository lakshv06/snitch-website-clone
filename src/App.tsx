import { ReactElement } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';

function App() : ReactElement {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/sign-in" element={<SignInPage />}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/sales-page" element={<SalesPage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
