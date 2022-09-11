//calling 
const express = require("express");
const app = express();

//route
app.get("/", (req, res) => {
    res.json({
        "messgae": "You are visiting root."
    });
});

app.get("/login", (req, res) => {
    res.json({
        "messgae": "You are at login page."
    });
});

app.get("/signup", (req, res) => {
    res.json({
        "messgae": "You are at signup page."
    });
});

app.get("/logout", (req, res) => {
    res.json({
        "messgae": "You are successfully logout."
    });
});

//listen
app.listen(8000, () => {
    console.log("App is running at 8000");
});