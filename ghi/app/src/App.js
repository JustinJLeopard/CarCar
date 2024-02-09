import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import TechnicianList from "./ServiceComponents/TechnicianLIst";
import AppointmentList from "./ServiceComponents/AppointmentList";
import CreateAppointmentForm from "./ServiceComponents/CreateAppointmentForm";
import CreateTechnicianForm from "./ServiceComponents/CreateTechnicianForm";
import AutomobileList from "./InventoryComponents/AutomobileList";
import ServiceHistoryList from "./ServiceComponents/ServiceHistoryList";
import CreateAutomobileForm from "./InventoryComponents/CreateAutomobileForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/automobiles/create/"
            element={<CreateAutomobileForm />}
          />
          <Route path="automobiles/list/" element={<AutomobileList />} />
          <Route path="technicians/" element={<TechnicianList />} />
          <Route path="servicehistory/" element={<ServiceHistoryList />} />
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
