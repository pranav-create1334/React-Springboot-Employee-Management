package com.example.Employee.Controller;

import com.example.Employee.Entity.Employee;
import com.example.Employee.Service.Emp_service;
import lombok.RequiredArgsConstructor;
import java.util.List;
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



//    public EmpController(Emp_service empService) {
//        emp_service = empService;
//    }
}
