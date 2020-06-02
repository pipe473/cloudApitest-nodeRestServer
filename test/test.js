
//Require the dev-dependencies

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const should = require('should');

chai.use(chaiHttp);
const url = "http://localhost:3000";

// describe("Insert a name ", () => {

/**
 * Test the GET route
 */

 describe("GET /users", () => {
     it("It should GET all the users", (done) => {
        chai.request(url)
            .get("/users")
            .end((err, response) => {
                // response.should.have.status(200);
                expect(response).to.have.status(200);
                // expect(response.body.users).should.be.a('array');
                // response.should.exist(res.body);
                // response.body.should.be.a('array');
                // response.body.length.should.be.eq();
             done();
            });
     });
 });


/**
 * Test the POST route
 */



//   it("should insert a user name", (done) => {
//     chai
//       .request(url)
//       .post("/user")
//       .send({
//         nombre: "Felipe",
//         email: "pipe473@gmail.com",
//         password: 123456,
//         address: "5ed53f5ba5245600171acd2d",
//       })
//       .end(function (err, res) {
//         console.log(res.body);
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
// });

// http://localhost:3000

