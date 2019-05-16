const request = require("supertest");
const server = require("./server.js");

describe("SERVER", () => {
    it("sets the environment to testing", () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe("GET /", () => {
        it("should return 200 OK", async () => {
            const response = await request(server).get("/");
            expect(response.status).toBe(500);
        });

        it("should return json object", async () => {
            expect(true).toBe(false);
        });

        it("should return expected content", async () => {
            expect(true).toBe(false);
        });
    });

    describe("GET /characters", () => {
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

    describe("POST /characters", () => {
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

    describe("DELETE /characters/:id", () => {
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