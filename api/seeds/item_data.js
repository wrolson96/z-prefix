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
      "Item Name": "Stick",
      Description:
        "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.",
      Quantity: "1",
    },
    {
      UserId: 1,
      "Item Name": "An Old Mans Walking Stick",
      Description: "A Wizard Is Never Late, Frodo Baggins",
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
      "Item Name": "Lazer",
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
    {
      UserId: 1,
      "Item Name": "Business Card",
      Description:
        "Do you like Phil Collins? I've been a big Genesis fan ever since the release of their 1980 album, Duke. Before that, I really didn't understand any of their work. Too artsy, too intellectual. It was on Duke where Phil Collins' presence became more apparent. I think Invisible Touch was the group's undisputed masterpiece. It's an epic meditation on intangibility. At the same time, it deepens and enriches the meaning of the preceding three albums. Christy, take off your robe. Listen to the brilliant ensemble playing of Banks, Collins and Rutherford. You can practically hear every nuance of every instrument. Sabrina, remove your dress. In terms of lyrical craftsmanship, the sheer songwriting, this album hits a new peak of professionalism. Sabrina, why don't you, uh, dance a little. Take the lyrics to Land of Confusion. In this song, Phil Collins addresses the problems of abusive political authority. In Too Deep is the most moving pop song of the 1980s, about monogamy and commitment. The song is extremely uplifting. Their lyrics are as positive and affirmative as anything I've heard in rock. Christy, get down on your knees so Sabrina can see your asshole. Phil Collins' solo career seems to be more commercial and therefore more satisfying, in a narrower way. Especially songs like In the Air Tonight and Against All Odds. Sabrina, don't just stare at it, eat it. But I also think Phil Collins works best within the confines of the group, than as a solo artist, and I stress the word artist. This is Sussudio, a great, great song, a personal favorite.",
      Quantity: "1",
    },
  ]);
};
