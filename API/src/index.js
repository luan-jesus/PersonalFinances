/** External Modules **/
const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');

/** Internal modules **/
// const parcelaController = require("./Controllers/parcelaController");

dotenv.config();

/** Express setup **/
const app = express();
app.use(cors());
app.use(express.json());

/** Express routing **/
// app.use("/", parcelaController);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

/** Server deployment **/
app.listen(PORT, () => console.log(`Server is running in ${NODE_ENV} environment, on PORT ${PORT}`));

