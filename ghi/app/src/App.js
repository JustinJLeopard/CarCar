import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import React from 'react';
import AddSalesperson from './SalesComponents/AddSalesperson';
import ListSalespeople from './SalesComponents/ListSalespeople';
import AddCustomer from './SalesComponents/AddCustomer';
import ListCustomers from './SalesComponents/ListCustomers';
import RecordNewSale from './SalesComponents/RecordNewSale';
import ListAllSales from './SalesComponents/ListAllSales';
import SalespersonHistory from './SalesComponents/SalespersonHistory';
import ModelList from './InventoryComponents/ModelList';
import CreateVehicleModelForm from './InventoryComponents/CreateVehicleModelForm';
import ManufacturersList from './InventoryComponents/ManufacturersList';
import TechnicianList from "./serviceComponents/TechnicianLIst";
import AppointmentList from "./serviceComponents/AppointmentList";
import CreateAppointmentForm from "./serviceComponents/CreateAppointmentForm";
import CreateTechnicianForm from "./serviceComponents/CreateTechnicianForm";


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
          <Route path="/customers" element={<ListCustomers />} />
          <Route path="/record-sale" element={<RecordNewSale />} />
          <Route path="/sales" element={<ListAllSales />} />
          <Route path="/saleshistory" element={<SalespersonHistory />} />
          <Route path="/modelslist" element={<ModelList />} />
          <Route path="/createmodels" element={<CreateVehicleModelForm />} />
          <Route path="/manufacturerslist" element={<ManufacturersList />} />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
