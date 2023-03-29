import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";

describe("Cities - DeleteById", () => {
  it("Delete a city", async () => {
    const dataToSend = { city_name: "Cedro" };
    const res1 = await testServer.post("/cities").send(dataToSend);
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(res1.body).toEqual({
      message: `City ${dataToSend.city_name} created successfully`,
      city_name: dataToSend.city_name,
      id: 1,
    });

    const deletedResponse = await testServer
      .delete(`/cities/${res1.body.id}`)
      .send();

    expect(deletedResponse.statusCode).toEqual(StatusCodes.OK);
    expect(deletedResponse.body).toEqual(
      `Register ${res1.body.id} deleted successfully`
    );
  });
});
