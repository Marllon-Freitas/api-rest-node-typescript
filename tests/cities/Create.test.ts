import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Should create a new city", () => {
  it("Create a valid register", async () => {
    const res1 = await testServer
      .post("/cities")
      .send({ city_name: "Caxias do Sul" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });
});
