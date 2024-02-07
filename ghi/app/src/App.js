import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import React from 'react';
import AddSalesperson from './SalesComponents/AddSalesperson';
import ListSalespeople from './SalesComponents/ListSalespeople';
import AddCustomer from './SalesComponents/AddCustomer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-salesperson" element={<AddSalesperson />} />
          <Route path="/salespeople" element={<ListSalespeople />} />
          <Route path="/add-customer" element={<AddCustomer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
