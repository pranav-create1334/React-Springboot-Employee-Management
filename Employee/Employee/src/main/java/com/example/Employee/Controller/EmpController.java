package com.example.Employee.Controller;

import com.example.Employee.Entity.Employee;
import com.example.Employee.Service.Emp_service;
import lombok.RequiredArgsConstructor;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor

public class EmpController {
    private final Emp_service emp_service;
    @PostMapping("/employee")
    public Employee postemployee(@RequestBody Employee employee)
    {
        return emp_service.postemployee(employee);

    }
    @GetMapping("/allemp")
    public List<Employee> getallemployee()
    {
        return emp_service.getallemployee();
    }
    @DeleteMapping("employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        emp_service.deleteEmployee(id);
        return ResponseEntity.ok().body("Employee Deleted Successfully");
    }
    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getemployeebyid(@PathVariable Long id)
    {
      Employee e=   emp_service.getEmployeeById(id);
      return ResponseEntity.ok(e);

    }
    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Long id,
            @RequestBody Employee employee) {

        Employee updatedEmployee = emp_service.updateEmployee(id, employee);
        return ResponseEntity.ok(updatedEmployee);
    }



}
