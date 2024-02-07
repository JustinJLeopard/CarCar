import { useState } from "react";

// function Appointment() {
//   const [appointmentStatus, setAppointmentStatus] = useState;

// async function getAppointments() {
//   const response = await fetch(`http://localhost:8080/api/appointments/`);
//   if (response.ok) {
//     const data = await response.json();
//   }
// }

const response = await fetch("http://localhost:8080/api/appointments/");
console.log(response);
