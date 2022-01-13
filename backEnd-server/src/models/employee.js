const { Schema, model} = require('mongoose')

const employeeSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    office: {type: String, required: true},
    salary: {type: Number, required: true},
},{
    timestamps: true,//añade el momento en que fue creado y actualizado por ultima vez
    versionKey: false 
})

module.exports = model ("Employee", employeeSchema);