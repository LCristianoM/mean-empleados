import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeSvc: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getEmployees() {
    this.employeeSvc.getEmployees().subscribe(
      (res) => {
        this.employeeSvc.employees = res;
      },
      (err) => console.log(err)
    );
  }
  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeSvc.updateEmployee(form.value).subscribe(
        (res) => {
          this.getEmployees();
          form.reset();
        },
        (err) => console.log(err)
      );
    } else {
      this.employeeSvc.createEmployee(form.value).subscribe(
        (res) => {
          this.getEmployees();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want delete employee?')) {
      this.employeeSvc.deleteEmployee(id).subscribe(
        (res) => {
          this.getEmployees();
        },
        (err) => console.log(err)
      );
    }
  }

  updateEmployee(employee: Employee) {
    this.employeeSvc.selectedEmployee = employee;
  }
}
