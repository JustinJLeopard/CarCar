import { useState } from "react";

function Appointment({
  appointment,
  handleAppointmentChange,
  deleteAppointment,
}) {
  const [status, setStatus] = useState(appointment.status);

  async function handleChange(id) {
    const response = await fetch(
      `http://localhost:8080/api/appointments/${id}/cancel`,
      { method: "put" }
    );
    if (!response.ok) {
      console.error("Unable to update status of Cancelled");
    } else {
      setStatus(["canceled"]);
      deleteAppointment(id);
    }
  }
  async function handleAppointment(id) {
    const response = await fetch(
      `http://localhost:8080/api/appointments/${id}/finish`,
      { method: "put" }
    );
    if (!response.ok) {
      console.error("error updating status to finished");
    } else {
      setStatus(["finished"]);
      deleteAppointment(id);
    }
  }
}
