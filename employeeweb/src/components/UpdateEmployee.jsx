import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

function UpdateEmployee() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    dept: ""
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const res = await getEmployeeById(id);
    setEmployee(res.data);
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(id, employee);
    alert("Employee Updated Successfully");
    navigate("/employees");
  };

  return (
    <div className="container">
      <h2>Update Employee</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Department</label>
          <input
            type="text"
            className="form-control"
            name="dept"
            value={employee.dept}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">
          Update Employee
        </button>

      </form>
    </div>
  );
}

export default UpdateEmployee;