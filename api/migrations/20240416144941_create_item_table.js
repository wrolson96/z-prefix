/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("item", (table) => {
    table.increments("id").primary();
    table.integer("UserId", 5).notNullable();
    table.string("Item Name", 50).notNullable();
    table.string("Description").notNullable();
    table.integer("Quantity", 50).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("item");
};
