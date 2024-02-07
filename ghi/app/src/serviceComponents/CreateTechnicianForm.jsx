import { useState } from "react";

function CreateTechnicianForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    employee_id: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:8080/api/technicians/";
    const getFormData = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, getFormData);

      if (response.ok) {
        const newTechnician = await response.json();
        console.log(newTechnician);

        const cleared = {
          first_name: "",
          last_name: "",
          employee_id: "",
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{ border: "1px solid #0D9276" }}
          >
            <div className="card-body">
              <h1
                className="card-title text-center"
                style={{ color: "#0D9276" }}
              >
                Add A Technician
              </h1>
              <form onSubmit={handleInputChange} id="add-technician">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleInputChange}
                    value={formData.first_name}
                    placeholder="First name"
                    required
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="form-control"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={handleInputChange}
                    value={formData.last_name}
                    placeholder="Last name"
                    required
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="form-control"
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={handleInputChange}
                    value={formData.employee_Id}
                    placeholder="Employee ID"
                    type="number"
                    min="1"
                    name="employee_id"
                    id="employee_id"
                    className="form-control"
                  />
                  <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button
                  className="btn"
                  style={{ backgroundColor: "#0D9276", color: "white" }}
                >
                  Add Technician
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTechnicianForm;
