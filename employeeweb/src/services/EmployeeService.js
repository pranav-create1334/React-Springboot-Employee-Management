import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getAllEmployees = () => axios.get(`${API_URL}/allemp`);

export const addEmployee = (employee) =>
  axios.post(`${API_URL}/employee`, employee);

export const deleteEmployee = (id) =>
  axios.delete(`${API_URL}/employee/${id}`);

export const getEmployeeById = (id) =>
  axios.get(`${API_URL}/employee/${id}`);

export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/employee/${id}`, employee);