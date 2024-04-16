const express = require("express");
const app = express();
const PORT = 8080;
const knex = require("knex")(require("./knexfile.js")["development"]);
const cors = require("cors");

app.use(express.json());
app.use(cors());

//GETS
//full inventory list
app.get("/inventory", (req, res) => {
  knex("item")
    .select("*")
    .orderBy("Item Name")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(404).send("No items found: err->", err));
});
//user inventory list
app.get("/inventory/:id", (req, res) => {
  knex("item")
    .select("*")
    .where("UserId", req.params.id)
    .orderBy("Item Name")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(404).send("No items found: err->", err));
});
//list of users
app.get("/users", (req, res) => {
  knex("user")
    .select("*")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(404).send("No items found: err->", err));
});
//check for account
app.get("/userVerify/:username/:password", (req, res) => {
  knex("user")
    .select("*")
    .where({
      Username: req.params.username,
      Password: req.params.password,
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(404).send("User Does Not Exist", err));
});

//POSTS
//new account creation
app.post("/createAccount", (req, res) => {
  console.log(req.body);
  let newUser = {
    "First Name": req.body["First Name"],
    "Last Name": req.body["Last Name"],
    Username: req.body["Username"],
    Password: req.body["Password"],
  };
  console.log("new user");
  knex("user")
    .insert(newUser)
    .then(() => {
      res.status(200).send("User Added Successfully");
    })
    .catch((err) => {
      res.status(404).send("Failed to add User: error -> ", err);
    });
});

//PATCHES
// app.patch()

//DELETES
// app.delete()

//LISTEN
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
