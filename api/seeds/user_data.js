/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      "First Name": "The",
      "Last Name": "Dude",
      Username: "TheDude",
      Password: "$2a$10$AU60.PuXb/lhdp2DD99R.uWTRer/adHjVNsqTKikZJFpsGDTpW3Va",
      Image:
        "https://media.gq-magazine.co.uk/photos/5d13a04bb744d364a425653b/1:1/w_1280,h_1280,c_limit/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg",
    },
  ]);
};
