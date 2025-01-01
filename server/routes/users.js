const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const users = require("../db/users.json");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(404).json({ message: "Invalid user id" });
});

router.post("/login", (req, res) => {
  const user = users.find(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  if (user) {
    return res.status(200).json({ user, message: "Login successful" });
  }
  return res
    .status(404)
    .json({ user: null, message: "Invalid username or password" });
});

router.post("/register", (req, res) => {
  const username = users.find((user) => user.username === req.body.username);
  if (!username) {
    const email = users.find((user) => user.email === req.body.email);
    if (!email) {
      if (req.body.password === req.body.confirmPassword) {
        users.push({
          ...req.body,
          id: users.length + 1,
          confirmPassword: undefined,
          terms: undefined,
        });

        fs.writeFileSync(
          path.join(__dirname, "../db/users.json"),
          JSON.stringify(users),
          "utf-8"
        );

        return res.status(200).json({
          user: { ...req.body, confirmPassword: undefined },
          message: "Register successful",
        });
      }
      return res
        .status(400)
        .json({ user: null, message: "password dont match" });
    }
    return res.status(400).json({ user: null, message: "Invalid email" });
  }
  return res.status(400).json({ user: null, message: "Invalid username" });
});

module.exports = router;
