
//Require the dev-dependencies

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const should = require('should');

const bcrypt = require("bcrypt");

chai.use(chaiHttp);
const url = "http://localhost:3000";


/**
 * Test the GET users route
 */

 describe("GET /users", () => {
     it("It should GET all the users", (done) => {
        chai.request(url)
            .get("/users")
            .end((err, response) => {
                expect(response.body.users).to.have.a('array');
                expect(response).to.have.status(200);
             done();
            });
     });
 });

 describe("GET with limit", () => {
    it("It should Return two users", (done) => {
       chai.request(url)
           .get("/users?limite=2&desde=0")
           .end((err, response) => {
               expect(response.body.users.length).to.be.equal(2);
            done();
           });
    });
});


/**
 * Test the POST route
 */


describe("POST", () => {
  it("should insert a unique id for every user", (done) => {
    chai.request(url)
      .post("/user")
      .send({
        nombre: "Felipe",
        email: "pipe473@gmail.com",
        password: bcrypt.hashSync('password', 10),
        address: "5ed53f5ba5245600171acd2d",
      })
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(201);
        done();
      });
  });
});

/**
 * Test the DELETE route
 */

describe("DELETE", () => {
    it("should delete a user created", (done) => {
      chai.request(url)
        .delete("/user/5ed665a47d0495cd6e3ce600")
        .send({
          nombre: "Felipe",
          email: "pipe473@gmail.com",
          password: bcrypt.hashSync('password', 10),
          address: "5ed53f5ba5245600171acd2d",
        })
        .end(function (err, res) {
          console.log(res.body);
          expect(res).to.have.status(201);
          done();
        });
    });
  });


