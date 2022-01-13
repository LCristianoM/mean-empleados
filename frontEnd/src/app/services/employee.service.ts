import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL = 'http://localhost:4000/api/employees';

  selectedEmployee: Employee = {
    _id: '',
    name: '',
    office: '',
    position: '', 
    salary: 0
  };
  employees : Employee[];

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.apiURL);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.apiURL, employee);
  }

  updateEmployee(employee: Employee){
    return this.http.put(`${this.apiURL}/${employee._id}`, employee)
  }

  deleteEmployee(_id: string){
    return this.http.delete(`${this.apiURL}/${_id}`)
  }

}
