import { useState, useEffect } from "react";

function CreateAppointmentForm() {
  const [formData, setFormData] = useState({
    date_time: "",
    customer: "",
    vin: "",
    reason: "",
    technician: "",
  });

  const [technician, setTechnician] = useState([]);
  useEffect(() => {
    async function getTechnicians() {
      const url = "http://localhost:8080/api/technicians/";
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setTechnician(data.technicians);
      }
    }
    getTechnicians();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointmentUrl = "http://localhost:8080/api/appointments/";
    const getFormData = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(appointmentUrl, getFormData);

      if (response.ok) {
        const newAppointment = await response.json();
        console.log(newAppointment);

        const cleared = {
          date_time: "",
          customer: "",
          vin: "",
          reason: "",
          technician: "",
        };
        setFormData(cleared);
      } else {
        console.error("Failed to create appointment:", response.statusText);
      }
    } catch (error) {
      console.error("An error occured while creating the hat", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create Appointment</h1>
          <form onSubmit={handleSubmit} id="create-appointment">
            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.vin}
                placeholder="Vin"
                required
                type="text"
                maxLength={17}
                name="vin"
                id="vin"
                className="form-control"
              />
              <label htmlFor="vin">VIN</label>
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.customer}
                placeholder="Customer"
                required
                type="text"
                name="customer"
                id="customer"
                className="form-control"
              />
              <label htmlFor="customer">Customer</label>
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.dateTime}
                placeholder="dateTime"
                name="dateTime"
                id="dateTime"
                type="datetime-local"
                className="form-control"
              ></input>
              <label htmlFor="dateTime">Date & Time</label>
            </div>

            <div className="mb-3">
              <select
                onChange={handleInputChange}
                required
                name="technician"
                id="technician"
                className="form-select"
              >
                <option value="formData.technician">Select Technician</option>
                {technician.map((tech) => {
                  return (
                    <option key={tech.employee_id} value={tech.employee_id}>
                      {tech.first_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.reason}
                placeholder="reason"
                type="text"
                name="reason"
                id="reason"
                className="form-control"
              />
              <label htmlFor="reason">Reason</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAppointmentForm;
