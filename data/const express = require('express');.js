const express = require("express");
const cors = require("cors");
const app = express();

// Use the CORS middleware to allow requests from your frontend domain
app.use(cors({ origin: "https://fabulousman23.github.io" }));

// Your existing routes and middleware
app.post("/login", (req, res) => {
  // Your login logic
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
