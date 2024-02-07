import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
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
