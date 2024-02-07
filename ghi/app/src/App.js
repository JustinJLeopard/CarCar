<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import React from 'react';
import AddSalesperson from './SalesComponents/AddSalesperson';
import ListSalespeople from './SalesComponents/ListSalespeople';
import AddCustomer from './SalesComponents/AddCustomer';
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import TechnicianList from "./serviceComponents/TechnicianLIst";
import AppointmentList from "./serviceComponents/AppointmentList";
import CreateAppointmentForm from "./serviceComponents/CreateAppointmentForm";
import CreateTechnicianForm from "./serviceComponents/CreateTechnicianForm";
>>>>>>> services_branch

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="/add-salesperson" element={<AddSalesperson />} />
          <Route path="/salespeople" element={<ListSalespeople />} />
          <Route path="/add-customer" element={<AddCustomer />} />
=======
          <Route path="technicians/" element={<TechnicianList />} />
          <Route path="appointments/" element={<AppointmentList />} />
          <Route
            path="appointments/create/"
            element={<CreateAppointmentForm />}
          />
          <Route
            path="technicians/create/"
            element={<CreateTechnicianForm />}
          />
>>>>>>> services_branch
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
