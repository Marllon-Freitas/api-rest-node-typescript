import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";

describe("Cities - GetById", () => {
  it("Search by id", async () => {
    const dataToSend = { city_name: "Cedro" };
    const res1 = await testServer.post("/cities").send(dataToSend);
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(res1.body).toEqual({
      message: `City ${dataToSend.city_name} created successfully`,
      city_name: dataToSend.city_name,
      id: 1,
    });

    const searchedResult = await testServer.get(`/cities/${res1.body.id}`).send();

    expect(searchedResult.statusCode).toEqual(StatusCodes.OK);
    expect(searchedResult.body).toHaveProperty("city_name");
  });
});
