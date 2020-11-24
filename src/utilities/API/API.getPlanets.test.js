import API from "./API";

jest.mock('axios');

describe("Tests for the getPlanets function in the API service", () => {
  test("Should return an array of planet objects", async () => {
    //Arrange
    expect.assertions(1);
    const correctResult = {
      "name": "Donlon",
      "distance": 100
    }
      
    //Act
    const result = await API.getPlanets();

    //Assert
    expect(result).toContainEqual(correctResult);
  });
});