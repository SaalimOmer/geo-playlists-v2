//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let playlists = ["playlists1","playlists2","playlists3","playlists4"];
let songs = ["song1","song2","song3"];
let playlistLocations = [];

app.get("/", function(req, res){
  res.render("index");
});

app.get("/test", function(req, res){
  res.render("test");
});
app.get("/set-location", function(req, res){
  res.render("set-location");
});


app.get("/browse-map", function(req, res){
  res.render("browse-map", {
    playlists:playlists,
    songs:songs
    });
});


app.get("/sign-up", function(req, res){
  res.render("sign-up");
});

app.get("/create-playlists", function(req, res){
  res.render("create-playlists", {
    playlists:playlists,
    songs:songs
    });
});


app.post("/", function(req, res){
    res.redirect("/sign-up");

});

app.post("/set-location", function(req, res){

  const playlistLocation = {
    name: req.body.name,
    latitude: req.body.latitude,
    longitude:req.body.longitude
  };

  playlistLocations.push(playlistLocation);

  console.log(playlistLocations);

  //res.redirect("/");

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
