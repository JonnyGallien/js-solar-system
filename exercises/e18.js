/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let mostAsteroids = [];
  function numOfAsteroids(year) {
    let asteroidYearArr = data.asteroids.filter((asteroid) => asteroid.discoveryYear === year);
    return asteroidYearArr.length;
  }
  data.asteroids.filter(function(asteroid) {
    if (mostAsteroids.length === 0) {
      mostAsteroids[0] = asteroid;
    } else if (numOfAsteroids(asteroid.discoveryYear) > numOfAsteroids(mostAsteroids[0].discoveryYear)) {
      mostAsteroids[0] = asteroid;
    }
  })
  return mostAsteroids[0].discoveryYear;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
