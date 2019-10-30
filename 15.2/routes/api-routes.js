var db = require("../models");

module.exports = function (app) {
    app.get("/api/todos", function (req, res) {
        console.log("GET");
        res.json({ response: "HURRAY" });
    });

    app.get("/api/todos/:id", function (req, res) {
        console.log("GET", req.params.id);
        res.json({ response: "HURRAY" });
    });

    app.post("/api/todos/", function (req, res) {
        console.log("POST", req.body);
        res.json({ response: "HURRAY" });
    });

    app.put("/api/todos/:id", function (req, res) {
        console.log("PUT", req.params.id);
        res.json({ response: "HURRAY" });
    });

    app.delete("/api/todos/:id", function (req, res) {
        console.log("DELETE", req.params.id);
        res.json({ response: "HURRAY" });
    });
};