const express = require("express");
const app = express();
const PORT = 8080;
const knex = require("knex")(require("./knexfile.js")["development"]);
const cors = require("cors");

app.use(express.json());
app.use(cors());

//GETS
app.get("/inventory", (req, res) => {
  knex("item")
    .select("*")
    .orderBy("Item Name")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(404).send("No items found: err->", err));
});

//POSTS
app.post("/creataccount", (req, res) => {
  let newUser = {
    "First Name": req.body.firstname,
    "Last Name": req.body.lastname,
    Username: req.body.username,
    Password: req.body.password,
  };
  knex(user)
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
