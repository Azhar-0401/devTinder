const express = require("express");
const { adminAuth, userAuth } = require("./middlwares/auth");

const app = express();

// Middleware for admin routes
app.use("/admin", adminAuth);

// User route handling
app.get(
    "/user",
    (req, res, next) => {
        console.log("Handling the route user!!");
        next();
    },
    (req, res, next) => {
        console.log("Handling the route user 2!!");
        next();
    },
    (req, res, next) => {
        console.log("Handling the route user 3!!");
        next();
    },
    (req, res, next) => {
        console.log("Handling the route user 4!!");
        next();
    },
    (req, res, next) => {
        console.log("Handling the route user 5!!");
        res.send("5th Response!!");
    }
);

// Login route
app.post("/user/login", (req, res) => {
    res.send("User logged in successfully!");
});

// User data route with authentication
app.get("/user/data", userAuth, (req, res) => {
    res.send("User Data Sent");
});

// Admin routes
app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});

// Start server
app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});
