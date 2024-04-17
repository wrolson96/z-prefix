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
//user's inventory list
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
//Get one item
app.get("/item/:id", (req, res) => {
  knex("item")
    .select("*")
    .where("id", req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(404).send("Item Does Not Exist", err));
});

//POSTS
//new account creation
app.post("/createAccount", (req, res) => {
  let newUser = {
    "First Name": req.body["First Name"],
    "Last Name": req.body["Last Name"],
    Username: req.body["Username"],
    Password: req.body["Password"],
  };
  knex("user")
    .insert(newUser)
    .then(() => {
      res.status(200).send("User Added Successfully");
    })
    .catch((err) => {
      res.status(404).send("Failed to add User: error -> ", err);
    });
});
//New Item Creation
app.post("/createItem", (req, res) => {
  let newItem = {
    UserId: req.body.UserId,
    "Item Name": req.body["Item Name"],
    Description: req.body.Description,
    Quantity: req.body.Quantity,
  };
  knex("item")
    .insert(newItem)
    .then(() => {
      res.status(200).send("Item Added Successfully");
    })
    .catch((err) => {
      res.status(404).send("Failed to add Item: error -> ", err);
    });
});

//PATCHES
app.patch("/editItem/:id", (req, res) => {
  let editedItem = {
    UserId: req.body.UserId,
    "Item Name": req.body["Item Name"],
    Description: req.body.Description,
    Quantity: req.body.Quantity,
  };
  knex("item")
    .where("id", req.params.id)
    .update(editedItem)
    .then(() => {
      res.status(200).send("item successfully updated");
    })
    .catch(() => {
      res.status(404).send("item failed to update");
    });
});

//DELETES
app.delete("/deleteItem/:id", (req, res) => {
  knex("item")
    .where("id", req.params.id)
    .del()
    .then(() => {
      res.status(204).send("Item successfully deleted");
    })
    .catch(() => {
      res.status(404).send("Item failed to delete");
    });
});

//LISTEN
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
