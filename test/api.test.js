const request = require("supertest");

const app = require("../server/app");

describe("GET /api/v1", () => {
  it("Responds with a json message", (done) => {
    request(app)
      .get("/api/v1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { message: "API - 🐱‍💻" }, done);
  });
});

describe("GET /api/v1/emojis", () => {
  it("Responds with a json message", (done) => {
    request(app)
      .get("/api/v1/emojis")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, ["😀", "😆", "😋"], done);
  });
});

describe("GET /api/v1/kaomojis", () => {
  it("Responds with a json message", (done) => {
    request(app)
      .get("/api/v1/kaomojis")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, ["(〜￣▽￣)〜", "(╯°□°）╯︵ ┻━┻", "Σ(っ °Д °;)っ"], done);
  });
});
