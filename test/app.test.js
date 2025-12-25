const request = require("supertest");
const app = require("../src/app");

test("GET / should return success message", async () => {
	  const res = await request(app).get("/")
expect(res.text).toBe("GitHub Actions CI Pipeline Working!");
});

