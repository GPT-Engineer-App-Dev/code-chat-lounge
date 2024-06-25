const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let users = [];

app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ success: false, message: "User already exists." });
  }

  users.push({ username, email, password });
  res.json({ success: true });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).json({ success: false, message: "Invalid credentials." });
  }

  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});