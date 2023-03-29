import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("cities", (table) => {
      table.bigIncrements("id").primary().index();
      table.string(ETableNames.CITIES, 150).notNullable().index();

      table.comment("This table stores the cities");
    })
    .then(() => {
      console.log(`# Table ${ETableNames.CITIES} created successfully`);
    })
    .catch((err) => {
      console.log("Error creating table cities: ", err);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ETableNames.CITIES).then(() => {
    console.log(`# Table ${ETableNames.CITIES} deleted successfully`);
  });
}
