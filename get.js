const request = require("supertest")("https://reqres.in/api")
const expect = require("chai").expect

describe("GET /users", function(){
    it("returns all users", async function(){
        const respone = await request.get("/users")

        expect(respone.status).to.eql(200)
        expect(respone.body.data.length).to.eql(6)

        console.log(respone.body)
    })
})