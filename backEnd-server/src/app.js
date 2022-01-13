const express = require ('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express();

app.set('port', process.env.PORT || 4000)

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());// para que express entieda json
app.use(express.urlencoded({ extended: false}));// express entienda html

app.use("/api/employees", require('./routes/employees.routes'))

module.exports = app;