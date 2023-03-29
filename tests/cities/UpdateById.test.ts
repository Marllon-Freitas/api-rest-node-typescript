import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cities - UpdateById", () => {
  it("Update a city", async () => {
    const dataToSend = { city_name: "Cedro" };
    const res1 = await testServer.post("/cities").send(dataToSend);
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(res1.body).toEqual({
      message: `City ${dataToSend.city_name} created successfully`,
      city_name: dataToSend.city_name,
      id: 1,
    });

    const updatedDataToSend = { city_name: "Fortaleza" };

    const updatedRes = await testServer
      .put(`/cities/${res1.body.id}`)
      .send(updatedDataToSend);

    expect(updatedRes.statusCode).toEqual(StatusCodes.OK);
    expect(updatedRes.body).toEqual({
      message: `City ${updatedDataToSend.city_name} updated successfully`,
      city_name: updatedDataToSend.city_name,
      id: res1.body.id,
    });
  });
});
