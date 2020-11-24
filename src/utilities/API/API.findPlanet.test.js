import API from "./API";

jest.mock('axios');

describe("Tests for the findPlanet function in the API service", () => {
  test("Should return an object containing a status property", async () => {
    //Arrange
    expect.assertions(1);
    const planetNames = ["Donlon", "Enchai", "Jebing", "Sapir"]
    const vehicleNames = ["Space pod", "Space rocket", "Space pod", "Space shuttle"]


      
    //Act
    const result = await API.findPlanet(planetNames, vehicleNames);

    //Assert
    expect(result).toHaveProperty('status');
  });
});