package com.example.Employee.Repository;

import com.example.Employee.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Emp_Repo extends JpaRepository<Employee, Long> {

}
