let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

let friends = ['Tony', 'Emma', 'Furious', 'Litani', 'Cyndalily'];

app.get("/", function(req, res){
    // res.send("Your Papa");
    res.render("home");
});

app.post("/addfriend", function(req, res){
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(8080, function(){
    console.log("Server Started!!!");
});