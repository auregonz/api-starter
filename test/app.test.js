const request = require("supertest");

const app = require("../server/app");

describe("app", () => {
  it("Responds with a not found message", (done) => {
    request(app)
      .get("/not-existing-path")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});

describe("GET /", () => {
  it("Responds with a json message", (done) => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { message: "🐱‍👤" }, done);
  });
});
