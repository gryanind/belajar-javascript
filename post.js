const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

describe("POST /users", function () {
  it("create new user", async function () {
    const response = await request
      .post("/users")
      .send({
        "name": "test nama",
        "job": "qa lead"
      });

    expect(response.status).to.eql(201);
    expect(response.body.name).to.eql("test nama");
    expect(response.body.job).to.eql("qa lead");
  });
});