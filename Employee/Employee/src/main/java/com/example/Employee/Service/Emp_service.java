package com.example.Employee.Service;

import com.example.Employee.Entity.Employee;
import com.example.Employee.Repository.Emp_Repo;
//import org.hibernate.mapping.List;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class Emp_service {
    @Autowired
    private final Emp_Repo emp_repo;
    public Emp_service(Emp_Repo empRepo) {
        emp_repo = empRepo;
    }
    public Employee postemployee(Employee employee)
    {
        return emp_repo.save(employee);
    }
    public List<Employee> getallemployee()
    {
     return emp_repo.findAll();
    }

    public void deleteEmployee(Long id) {
        emp_repo.deleteById(id);
    }
    public Employee getEmployeeById(Long id) {
        return emp_repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existingEmployee = emp_repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPhone(employee.getPhone());
        existingEmployee.setDept(employee.getDept());

        return emp_repo.save(existingEmployee);
    }
}
