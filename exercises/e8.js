import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let moonPlanets = data.planets.filter((planet) => planet.moonsCount > 0)
  let thePlanet = moonPlanets.find((planet) => planet.moons.find((moons) => moons.includes(moonName)) === moonName);
  return thePlanet.name;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
