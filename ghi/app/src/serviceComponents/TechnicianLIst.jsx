import React, { useEffect, useState } from "react";

function TechnicianList(props) {
  const [technicians, setTechnicians] = useState([]);

  async function getTechnicians() {
    const response = await fetch("http://localhost:8080/api/technicians/");
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    } else {
      console.error(response);
    }
  }

  useEffect(() => {
    getTechnicians();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Technician Personnel</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map((technician) => {
            return (
              <tr key={technician.id}>
                <td>{technician.first_name}</td>
                <td>{technician.last_name}</td>
                <td>{technician.employee_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianList;
