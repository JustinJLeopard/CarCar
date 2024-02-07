import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

async function getAppointments() {
  const response = await fetch("http://localhost:8080/api/appointments/");
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error(response);
  }
}
getAppointments();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
