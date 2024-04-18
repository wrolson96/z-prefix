/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("item", (table) => {
    table.increments("id").primary();
    table.integer("UserId").notNullable();
    table.string("Item Name").notNullable();
    table.string("Description", 10000).notNullable();
    table.integer("Quantity").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("item");
};
