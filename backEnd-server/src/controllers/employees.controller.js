const employeeController = {}

const Employee = require('../models/employee')

employeeController.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}

employeeController.createEmployee = async(req, res) => {
    const newEmployee = new Employee(req.body)
    
    await newEmployee.save()
    res.send({message: 'Employee created'})
}

employeeController.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee);
}

employeeController.updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'employee updated'})
}

employeeController.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee deleted'})
}

module.exports = employeeController;