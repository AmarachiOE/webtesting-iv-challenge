const request = require("supertest");
const server = require("./server.js");

describe("SERVER", () => {
  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return 200 OK", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });

    it("should return json object", async () => {
      const response = await request(server).get("/");
      expect(response.type).toBe("application/json");
    });

    it("should return { api: 'running' }", async () => {
      const expectedBody = { api: "running" };
      const response = await request(server).get("/");
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("GET /characters", () => {
    it("should return 200 OK", async () => {
      const response = await request(server).get("/characters");
      expect(response.status).toBe(200);
    });

    it("should return json object", async () => {
      const response = await request(server).get("/characters");
      expect(response.type).toBe("application/json");
    });

    it.skip("should return expected content", async () => {
      const expectedBody = [
        { id: value, key: "value" },
        { id: value, key: "value" },
        { id: value, key: "value" }
      ]; // what data are you expecting
      const response = await request(server).get("/characters");
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("GET /characters/2", () => {
    // skip if using beforeEach on model.test instead of beforeAll

    // using /characters/2 because I'm testing deleting character/1 on model.test

    it("should return 200 OK", async () => {
      const response = await request(server).get("/characters/2");
      expect(response.status).toBe(200);
    });

    it("should return json object", async () => {
      const response = await request(server).get("/characters/2");
      expect(response.type).toBe("application/json");
    });

    it("should return expected content", async () => {
      const expectedBody = {
        id: 2,
        name: "nancy"
      };
      const response = await request(server).get("/characters/2");
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("POST /characters", () => {
    it("should return 201 OK", async () => {
      const newCharacter = { name: "nelly" };
      const response = await request(server)
        .post("/characters")
        .send(newCharacter);
      expect(response.status).toBe(201);
    });

    it("should return json object", async () => {
      const response = await request(server).post("/characters");
      expect(response.type).toBe("application/json");
    });

    it.skip("should return expected content", async () => {
      expect(true).toBe(false);
    });
  });

  describe("DELETE /characters/:id", () => {
    it("should return 204 OK", async () => {
      const response = await request(server).delete("/characters/3");
      expect(response.status).toBe(204);
    });

    it.skip("should return json object", async () => {
      expect(true).toBe(false);
    });

    it.skip("should return expected content", async () => {
      expect(true).toBe(false);
    });
  });
});
