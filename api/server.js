// Packages
const express = require("express");

// Data
const characters = require("../characters/charactersModel.js");

// Server
const server = express();
server.use(express.json());

// Endpoints
server.get("/", async (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/characters", async (req, res) => {
  const result = await characters.getAll();

  res.status(200).json(result);
});

server.get("/characters/:id", async (req, res) => {
  const characterId = req.params.id;

  try {
    const character = await characters.getById(characterId);

    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: "Character not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving the character" });
  }
});

module.exports = server;
