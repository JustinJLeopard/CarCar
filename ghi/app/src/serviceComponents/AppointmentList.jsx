import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const apptFormNavigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/appointments/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAppointments(data.appointments || []); // Assuming the API returns an object with an "appointments" array
      } catch (error) {
        console.error("Fetch error:", error.message);
        setError(error.message);
      }
    };

    getData();
  }, []);

  // Handle the cancellation of the appointment
  const handleDeleteAppointment = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/appointments/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete the appointment");
      }
      // Filter out the deleted appointment from the list
      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
    } catch (error) {
      console.error("Delete error:", error.message);
      setError(error.message);
    }
  };

  //Test with partners implementation as well
  // Using React Router DOM --> {useNavigate} {documentationLink:https://reactrouter.com/en/main/hooks/use-navigate}
  // Handle the button click for creating a new appointment for customer

  function handleButtonClick() {
    apptFormNavigate("/appointments/create/");
  }

  // Using JavaScript built in fuction to formate the Date Output to the client UI for the appointment List
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div style={{ flex: 1 }}></div>
        <h1 className="text-center" style={{ flex: 2 }}>
          Appointment List Test
        </h1>
        <div style={{ flex: 1 }} className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Book New Appointment
          </button>
        </div>
      </div>
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
              <tr key={appointment.id}>
                <td>{formatDate(appointment.date_time)}</td>
                <td>{appointment.customer}</td>
                <td>{appointment.vip ? "Yes" : "No"}</td>
                <td>{appointment.vin}</td>
                <td>{appointment.reason}</td>
                <td>
                  {appointment.technician.first_name +
                    " " +
                    appointment.technician.last_name}
                </td>
                <td>{appointment.status}</td>
                <td>
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteAppointment(appointment.id)}
                    >
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
