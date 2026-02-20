import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddEmployee() {
  const navigate = useNavigate();

  // Employee state
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    dept: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting employee:", employee); // Debug: check state

    try {
      // Explicit JSON headers
      const response = await axios.post(
        "http://localhost:8080/api/employee",
        employee,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data); // Debug: check response
      alert("Employee Added Successfully!");
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (error) {
      console.error("Error adding employee:", error.response || error);
      alert("Error adding employee");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Add Employee</Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
                placeholder="Enter phone"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="dept"
                value={employee.dept}
                onChange={handleChange}
                placeholder="Enter department"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Save Employee
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddEmployee;
