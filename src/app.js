const express = require("express");
const routes = require("./routes/userRoutes.js")
const app = express();
const morgan = require("morgan");
const fs = require('fs');
const path = require('path');
const cors = require("cors");



const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs.txt'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));



app.use("/api",routes)



module.exports =app;