import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeesService } from './employees.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Test / Abu Dhabi Ports';
  employees: any = [];

  constructor(private employeesServices: EmployeesService) {}

  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    company: new FormControl(''),
    position: new FormControl(''),
  });

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeesServices.getEmployees().subscribe(
      (data) => {
        this.employees = data;
        console.log(this.employees);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeEmployee(id: number) {
    console.log(id);
    this.employeesServices.removeEmployee(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addEmployee() {
    console.log(this.employeeForm.value);
    const data = {
      name: this.employeeForm.value.name,
      email: this.employeeForm.value.email,
      gender: this.employeeForm.value.gender,
      mobile: this.employeeForm.value.mobile,
      address: this.employeeForm.value.address,
      company: this.employeeForm.value.company,
      position: this.employeeForm.value.position,
    };

    this.employeesServices.addEmployee(data).subscribe(
      (data) => {
        console.log(data);
        this.retrieveEmployees();
        this.employeeForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
