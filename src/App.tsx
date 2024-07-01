import { ReactElement } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import NavHeader from './pages/NavigationHeader';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  const showNavHeader = location.pathname !== "/sign-in";

  return (
    <>
      {showNavHeader && <NavHeader />}
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/sales-page" element={<SalesPage />} />
      </Routes>
    </>
  );
}

export default App;
