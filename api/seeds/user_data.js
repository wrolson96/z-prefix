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
    },
  ]);
};
