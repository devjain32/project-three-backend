const chai = require("chai");
const should = require("should");
const mongoose = require("mongoose");
const User = require("../models/user");
var db;

describe("User", function(){
    before(function(done){
        db = mongoose.connect("mongodb://localhost/test");
        done();
    });

    after(function(done){
        mongoose.connection.close();
        done();
    });

    beforeEach(function(done){
        let user = new User({
            username: "butts",
            password: "ilikebutts123"
        });

        user.save(function(err){
            if (err) console.log("error" + err.message);
            else console.log("no error");
            done();
        });
    });

    it("find a user by username", function(done){
        User.findOne({username: "test"}, function(err, user){
            user.username.should.eql("test");
            console.log("  username:  ", user.username);
            done();
        });
    });

    afterEach(function(done){
        User.remove({}, function(){
            done();
        });
    });
});