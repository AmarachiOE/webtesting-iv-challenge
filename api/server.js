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

server.post("/characters", (req, res) => {
  const newCharacter = req.body;
  if (!newCharacter || !newCharacter.name) {
    res.status(404).json({ error: "You must include a character with a name" });
  } else {
    characters
      .add(newCharacter)
      .then(character => {
        res.status(201).json(character);
      })
      .catch(err => {
        res.status(500).json({ error: "Error occurred." });
      });
  }
});

server.delete("/characters/:id", (req, res) => {
  const characterId = req.params.id;
  characters
    .remove(characterId)
    .then(character => {
      if (character) {
        res.status(204).json(character);
      } else {
        res
          .status(400)
          .json({
            error: "The character with the specified ID does not exist."
          });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The character could not be removed"
      });
    });
});

module.exports = server;
