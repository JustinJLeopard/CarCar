import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertList from "./AlertList";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [automobile, setAutomobile] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/api/appointments/");

    if (response.ok) {
      const { appointments } = await response.json();
      setAppointments(appointments);
      console.log(appointments);
    } else {
      console.error("An error occurred fetching the data");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  function deleteAppointment(id) {
    const newAppointmentList = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointmentList);
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div>
      <h1>Appointment List Test</h1>
      <Link to="/service/appointment/new" className="btn btn-primary">
        Book New Appointment
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Is VIP </th>
            <th>VIN</th>
            <th>Reason</th>
            <th>Assigned Technician</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => {
            return (
              <tr key={appointment.date_time}>
                <td>{formatDate(appointment.date_time)}</td>
                <td>{appointment.customer}</td>
                <td>{appointment.vip}</td>
                <td>{appointment.vin}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.technician.first_name}</td>
                <td>{appointment.status}</td>
                <td>
                  <div>
                    <button type="button" className="btn btn-danger">
                      Cancel
                    </button>{" "}
                    <button type="button" className="btn btn-success">
                      Finish
                    </button>{" "}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default AppointmentList;
