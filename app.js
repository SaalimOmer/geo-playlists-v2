//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




let playlists = [{
    index:0,
    name: "saalim",
    playlistName: "playlists1",
    latitude: 25.000,
    longitude: 120.000,
    song: [" saalim song1", "song2", "song3"]
  },
  {
    index:1,
    name: "farid",
    playlistName: "playlists2",
    latitude: 34.000,
    longitude: 100.000,
    song: ["farid song1", "song2", "song3"]
  },
  {
    index:2,
    name: "god",
    playlistName: "playlists3",
    latitude: 55.000,
    longitude: 93.000,
    song: ["god song1", "song2", "song3"]
  }
];

let tableContent = playlists;
let tableIndex =0;




app.get("/", function(req, res) {
  res.render("index");
});

app.get("/test", function(req, res) {
  res.render("test");
});
app.get("/set-location", function(req, res) {
  res.render("set-location", {
    playlists: playlists,
  });
});



app.get("/browse-map", function(req, res) {
  res.render("browse-map", {
    playlists: playlists,
  });

});





app.get("/sign-up", function(req, res) {
  res.render("sign-up");
});

app.get("/test2", function(req, res) {

  res.render("test2", {
    myPlaylists: myPlaylists,
    playlists: playlists,
    songs: songs,
    playlistLocations: playlistLocations
  });

});

app.get("/test3", function(req, res) {
  res.render("test3", {
    playlists: playlists,
  });
});


app.get("/create-playlists", function(req, res) {
  res.render("create-playlists", {
    playlists: playlists,
    tableContent:tableContent,
    tableIndex:tableIndex

  });
});


app.post("/", function(req, res) {
  res.redirect("/sign-up");

});
app.post("/home", function(req, res) {
  res.redirect("/create-playlists");

});

app.post("/set-location", function(req, res) {

  const playlistLocation = {
    name: req.body.name,
    playlistName: req.body.playlistName,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  playlistLocations.push(playlistLocation);

  //  console.log(playlistLocations);

  //res.redirect("/");

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
