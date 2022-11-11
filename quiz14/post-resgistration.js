const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("POST /api/authaccount/registration", function () {
  it("create new user", async function () {
    const response = await request
      .post("/api/authaccount/registration")
      .send({
        "name":"Developer",
        "email":"Developer5@gmail.com",
        "password":123456
      });

    expect(response.status).to.eql(201);
    expect(response.body.name).to.eql("test nama");
    expect(response.body.job).to.eql("qa lead");
  });
});