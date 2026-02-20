import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const addEmployee = (employee) => {
  return axios.post(`${API_URL}/employee`, employee);
};

export const getAllEmployees = () => {
  return axios.get(`${API_URL}/allemp`);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/employee/${id}`);
};