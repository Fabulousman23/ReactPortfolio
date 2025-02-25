import React from 'react';
import Link from 'next/link';

const MyComponent = () => (
  <Link href="/about">
    About
  </Link>
);

export default MyComponent;

const express = require("express");
const cors = require("cors");
const app = express();

// Use the CORS middleware to allow requests from your frontend domain
app.use(cors({ origin: "https://fabulousman23.github.io" }));

// Your existing routes and middleware
app.post("/login", (req, res) => {
  // Your login logic
  res.send("Login successful");
});

app.post("/users", (req, res) => {
  // Your users logic
  res.send("Users endpoint");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

{
  "name": "your-app-name",
  "version": "1.0.0",
  "description": "Your app description",
  "main": "index.js",
  "scripts": {
    "start": "next start",
    "build": "next build",
    "dev": "next dev"
  },
  "engines": {
    "node": "22.x",
    "npm": ">=6.0.0"
  },
  "dependencies": {
    "next": "^12.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "express": "^4.17.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}