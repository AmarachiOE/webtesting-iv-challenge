// What we're testing
const CharactersModel = require("./charactersModel.js");

// The data we need
const db = require("../database/dbConfig.js");

describe("CHARACTERS MODEL", () => {

    // prevent duplicate records when restarting test
    // before every test, go to hobbits table and truncate the table

    beforeEach(async () => {
        await db("characters").truncate();
    });
    
  // ======== getAll()
  describe("getAll()", () => {
    it("should return all characters", async () => {
      expect(true).toBe(false);
    });
  });

  // ======== getById()
  describe("getById()", () => {
    it("should return character by ID", async () => {
      expect(true).toBe(false);
    });
  });
  
  // ======== add()
  describe.only("add()", () => {
    it("should add provided character", async () => {
      await CharactersModel.add({ name: "greg" });

      const characters = await db("characters");

      expect(characters).toHaveLength(1);
    });
  });

  // ======== remove()
  describe("remove()", () => {
    it("should remove provided character", async () => {
      expect(true).toBe(false);
    });
  });
});
