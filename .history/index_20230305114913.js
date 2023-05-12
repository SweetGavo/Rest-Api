require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Subscriber = require('')

const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection

db.on("error", (error) => console.error(error));

db.once("open", () => console.log('Connected to db...'));

app.use(express.json());

const subcribersRouter = require('./routes/subscribers');

app.use("/subscribers", subcribersRouter);

app.listen(PORT,console.log(`App listening on port ${PORT}`));