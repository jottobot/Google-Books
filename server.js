const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./server/routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB_URI ||
    "mongodb://user:password1@ds151753.mlab.com:51753/heroku_7f0wztx2",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(err => {
    console.log("Not Connected to Database ERROR! ", err);
  });

// Connect to the Mongo DB
// var MONGODB_URI = process.env.MONGODB_URI
// mongoose.connect(MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true })
//     .then(data=> console.log("Connected! ", data))
//     .catch(err=> console.log("ERROR: ", err))

// Send every other request to the React app
// Define any API routes before this runs
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});