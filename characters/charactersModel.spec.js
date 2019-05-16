// What we're testing
const CharactersModel = require("./charactersModel.js");

// The data we need
const db = require("../database/dbConfig.js");

describe("CHARACTERS MODEL", () => {
  // prevent duplicate records when restarting test
  // before every test, go to hobbits table and truncate the table

  // using beforeAll instead of beforeEach so I can maintain added characters to be able to remove them in latter tests

  beforeAll(async () => {
    await db("characters").truncate();
  });

  // ======== getAll()
  describe("getAll()", () => {
    it("should return all characters", async () => {
      const characters = await CharactersModel.getAll();
      expect(characters).toBeTruthy();
    });
  });

  // ======== add()
  describe("add()", () => {
    it("should add provided character(s)", async () => {
      let newCharacter = await CharactersModel.add({ name: "greg" });
      expect(newCharacter.name).toBe("greg");

      newCharacter = await CharactersModel.add({ name: "nancy" });
      expect(newCharacter.name).toBe("nancy");

      newCharacter = await CharactersModel.add({ name: "timothy" });
      expect(newCharacter.name).toBe("timothy");

      const characters = await db("characters");
      expect(characters).toHaveLength(3);
    });
  });

  // ======== getById()
  describe("getById()", () => {
    it("should return character by ID", async () => {
      const character = await CharactersModel.getById(1);
      expect(character).toBeDefined(); // because truncating table before every test so there is nothing there
    });
  });

  // ======== remove()
  describe("remove()", () => {
    it("should remove provided character", async () => {
      await CharactersModel.remove(1);

      const characters = await db("characters");
      expect(characters).toHaveLength(2);
    });
  });
});
