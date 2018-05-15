// Code your solution in this file!
const firstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return [drivers[0], drivers[1]];
}

const lastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return [drivers[-2], drivers[-1]];
}

selectingDrivers = [firstTwoDrivers, lastTwoDrivers];

function createFareMultiplier(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

