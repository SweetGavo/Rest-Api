const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT = 3000;

mongoose.connect('mongodb://localhost/subcriber');
app.listen(PORT,console.log(`App listening on port ${PORT}`));