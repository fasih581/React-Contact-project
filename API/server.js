const express = require('express');
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cros = require("cors");

const connectmongo = require("../API/server/database/connectionDB");

const app = express();
app.use(cros());

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 5000;

// parser request to bady-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", require("../API/server/routes/router"));

// MongoDB connection
connectmongo();

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})