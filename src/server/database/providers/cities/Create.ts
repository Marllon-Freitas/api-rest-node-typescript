import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { ICities } from "../../models";

export const create = async (
  city: Omit<ICities, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.CITIES)
      .insert(city)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Error creating city");
  } catch (error) {
    console.error("error creating city: (Provider)", error);
    return new Error("Error creating city");
  }
};
