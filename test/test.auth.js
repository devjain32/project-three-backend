const expect = require("chai").expect;
const server = require("../server");
const request = require("supertest");

const agent = request.agent(server);
const userCreds = {
    username: "test",
    password: "testing123"
}

describe("Auth process", function(){
    it("should register user", registerUser())
    it("should login", loginUser())

    function registerUser(){
        return function(done){
            agent
                .post("/user/accounts/register")
                .send(userCreds)
                .expect(200)
                .end(onResponse);
            
            function onResponse(err, res){
                if(err) return done(err);
                return done();
            }
        }
    }

    function loginUser(){
        return function(done){
            agent
                .post("/user/accounts/login")
                .send(userCreds)
                .expect(302)
                .expect("Location", "/garden/")
                .end(onResponse);
            function onResponse(err, res){
                if(err) return done(err)
                return done();
            }
        }
    }

})

