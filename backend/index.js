const express = require("express");
const app = express();
const cors = require("cors"); // Import the cors middleware

app.use(cors()); // Use cors middleware to allow all origins

app.get("/hello", (req, res) => {
  res.send("Hello, world! - by Matheus Dalia");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
