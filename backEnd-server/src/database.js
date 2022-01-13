const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/mean-employees')
    .then( (db) => console.log('DB is okay'))
    .catch((err) => console.log(err));