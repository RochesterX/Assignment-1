
const express = require("express");

const serverPort = 3001;

const app = express();
app.use(express.static("public"))

app.listen(serverPort, "0.0.0.0", () => console.log(`Running server on port ${serverPort}`));

