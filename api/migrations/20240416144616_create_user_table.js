/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary();
    table.string("First Name", 50).notNullable();
    table.string("Last Name", 50).notNullable();
    table.string("Username", 255).notNullable();
    table.string("Password", 255).notNullable();
    table.string("Image");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
