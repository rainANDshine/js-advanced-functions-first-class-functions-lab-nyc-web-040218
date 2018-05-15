// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length-2], drivers[drivers.length-1]];
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

const fareDoubler = function() {
  return 2 * createFareMultiplier(num1)
}
