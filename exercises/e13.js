import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  let tempTotal = data.planets.reduce(function(acc, val) {
    return acc + val.avgTemp;
  }, 0)
  let planetCount = data.planets.reduce(function(acc, val) {
    return acc + 1;
  }, 0)
  return tempTotal/planetCount;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
