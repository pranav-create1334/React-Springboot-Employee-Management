import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import NoMatch from "./components/NoMatch";
import UpdateEmployee from "./components/UpdateEmployee";
function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
