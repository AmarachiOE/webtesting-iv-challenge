// Packages
const express = require("express");

// Data
const characters = require("../characters/charactersModel.js");

// Server
const server = express();
server.use(express.json());

// Endpoints
server.get("/", async(req, res) => {
    res.status(200).json({ api: "running" });
});


module.exports = server;


