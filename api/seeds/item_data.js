/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("item").del();
  await knex("item").insert([
    {
      UserId: 1,
      "Item Name": "Boots",
      Description: "Made for Walking",
      Quantity: "5",
    },
    {
      UserId: 1,
      "Item Name": "Elder Wand",
      Description: "oculus reparo",
      Quantity: "1",
    },
    {
      UserId: 1,
      "Item Name": "An Old Mans Walking Stick",
      Description: "You Shall Not Pass",
      Quantity: "3",
    },
    {
      UserId: 1,
      "Item Name": "Ring",
      Description: "One Does Not Simply Walk Into Mordor",
      Quantity: "1",
    },
    {
      UserId: 1,
      "Item Name": "Lazer Stick",
      Description: "May the Force be With You",
      Quantity: "7",
    },
    {
      UserId: 1,
      "Item Name": "Volleyball",
      Description: "WILSON!!!!!",
      Quantity: "1",
    },
    {
      UserId: 1,
      "Item Name": "Hammer",
      Description:
        "Whosoever holds this hammer, if they be worthy, shall possess the power of Thor",
      Quantity: "5",
    },
    {
      UserId: 1,
      "Item Name": "Baseball",
      Description: "The Great Bambino!!!",
      Quantity: "1",
    },
    {
      UserId: 1,
      "Item Name": "Car",
      Description: "Where were going we don't need roads",
      Quantity: "1",
    },
  ]);
};
