import API from "./API";

jest.mock('axios');

describe("Tests for the getVehicles function in the API service", () => {
  test("Should return an array of vehicle objects", async () => {
    //Arrange
    expect.assertions(1);
    const correctResult = {
      "name": "Space shuttle",
      "total_no": 1,
      "max_distance": 400,
      "speed": 5
    }
      
    //Act
    const result = await API.getVehicles();

    //Assert
    expect(result).toContainEqual(correctResult);
  });
});