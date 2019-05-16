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

    it("should return expected content", async () => {
      const expectedBody = [
        {
          id: 1,
          name: "greg"
        }
      ];
      const response = await request(server).get("/characters");
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("GET /characters/1", () => {
    it("should return 200 OK", async () => {
      const response = await request(server).get("/characters/1");
      expect(response.status).toBe(200);
    });

    it("should return json object", async () => {
      const response = await request(server).get("/characters/1");
      expect(response.type).toBe("application/json");
    });

    it("should return expected content", async () => {
      const expectedBody = {
          id: 1,
          name: "greg"
        };
      const response = await request(server).get("/characters/1");
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe.skip("POST /characters", () => {
    it("should return 201 OK", async () => {
      const response = await request(server).post("/characters");
      expect(response.status).toBe(500);
    });

    it("should return json object", async () => {
      expect(true).toBe(false);
    });

    it("should return expected content", async () => {
      expect(true).toBe(false);
    });
  });

  describe.skip("DELETE /characters/:id", () => {
    it("should return 200 OK", async () => {
      const response = await request(server).get("/characters");
      expect(response.status).toBe(500);
    });

    it("should return json object", async () => {
      expect(true).toBe(false);
    });

    it("should return expected content", async () => {
      expect(true).toBe(false);
    });
  });
});
