import { knex } from "knex";

import { test, development } from "./Environment";

const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case "test":
      return test;
    case "development":
      return development;
    default:
      return development;
  }
};

export const Knex = knex(getEnvironment());
