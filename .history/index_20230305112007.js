require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on("error", (error) => console.error(error));
db.once("open", () => console.log('Connected to db...'));
app.use(express.json())
const sub

app.listen(PORT,console.log(`App listening on port ${PORT}`));