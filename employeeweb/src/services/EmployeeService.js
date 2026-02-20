import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getAllEmployees = () => {
    return axios.get(`${API_URL}/allemp`);
};

export const createEmployee = (employee) => {
    return axios.post(`${API_URL}/employee`, employee);
};