const prompt = require('prompt-sync')({sigint: true})
const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("API List", function () {
  //Registration
  var nomortoken
  const name = prompt('Name:')
  const email = prompt('Email:')
  const sandi = prompt('Password:')
  it("Registartion", async function () {
    const response = await request
      .post("/api/authaccount/registration")
      .send({
        "name":name,
        "email":email,
        "password":sandi
      });
    
    expect(response.status).to.eql(200);
    expect(response.body.code).to.be.oneOf([0,1])
    expect(response.body.data.Name).to.eql(name)
    expect(response.body.data.Email).to.eql(email)
    expect(response.body.code).to.eql(0)

    console.log(response.body)
  });
  //Login
  it("Login", async function () {
    const response = await request
      .post("/api/authaccount/login")
      .send({
        "email":email,
	      "password":sandi
      });
    
    expect(response.status).to.eql(200);
    expect(response.body.data.Email).to.eql(email)
    expect(response.body.data.Name).to.eql(name)
    expect(response.body.code).to.eql(0)
    expect(response.body.data.Token).to.not.eql(null)

    nomortoken = response.body.data.Token

    console.log(response.body)
    console.log(nomortoken)
  });
  //Create New User
  const name1 = prompt('Name:')
  const email1 = prompt('Email:')
  const sandi1 = prompt('Password:')
  it("Create New User", async function () {
    const response = await request
      .post("/api/users")
      .send({
        "name":name1,
	      "email":email1,
	      "password":sandi1
      })
      .set({Authorization: "Bearer "+nomortoken})
    
    expect(response.status).to.eql(201);
    expect(response.body.email).to.eql(email1)
    expect(response.body.name).to.eql(name1)

    console.log(response.body)
  });
});