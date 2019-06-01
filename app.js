//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let myPlaylists =[{name:"playlists1",song:["song1","song2","song3"]},{name:"playlists2",song:["song1","song2","song3"]},{name:"playlists3",song:["song1","song2","song3"]}];
let playlists = ["playlists1","playlists2","playlists3","playlists4"];
let songs = ["song1","song2","song3","song4","song5","song6","song7","song8","song9"];
let playlistLocations = [{name:"saalim",playlistName:"playlists1",latitude:25.000,longitude:120.000,song:["song1","song2","song3"]} ,{name:"farid",playlistName:"playlists2",latitude:34.000,longitude:100.000,song:["song1","song2","song3"]},{name:"god",playlistName:"playlists3",latitude:55.000,longitude:93.000,song:["song1","song2","song3"]}];
let cool = [];
let arr = [];





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
    myPlaylists:myPlaylists,
    playlists:playlists,
    songs:songs,
    playlistLocations:playlistLocations
    });

});





app.get("/sign-up", function(req, res){
  res.render("sign-up");
});

app.get("/test2", function(req, res){

  res.render("test2", {
    myPlaylists:myPlaylists,
    playlists:playlists,
    songs:songs,
    playlistLocations:playlistLocations
    });

});

app.get("/test3", function(req, res){
  res.render("test3", {
    myPlaylists:myPlaylists,
    playlists:playlists,
    songs:songs,
    playlistLocations:playlistLocations
    });
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
app.post("/home", function(req, res){
    res.redirect("/create-playlists");

});

app.post("/set-location", function(req, res){

  const playlistLocation = {
    name: req.body.name,
    playlistName:req.body.playlistName,
    latitude: req.body.latitude,
    longitude:req.body.longitude
  };

  playlistLocations.push(playlistLocation);

//  console.log(playlistLocations);

  //res.redirect("/");

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
