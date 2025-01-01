const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const products = require("./routes/products.js");
app.use("/products", products);

const users = require("./routes/users.js");
app.use("/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server on http://localhost:${port}/`));
