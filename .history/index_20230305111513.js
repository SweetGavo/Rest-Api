const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT = 3000;

mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });
const db = mongoose.connection
db.on("error", (error) => console.error(error));
db.on("error", (error) => log);

app.listen(PORT,console.log(`App listening on port ${PORT}`));