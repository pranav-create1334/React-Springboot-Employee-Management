package com.example.Employee.Service;

import com.example.Employee.Entity.Employee;
import com.example.Employee.Repository.Emp_Repo;
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
}
