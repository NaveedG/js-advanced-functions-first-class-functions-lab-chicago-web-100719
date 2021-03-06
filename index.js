const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function(y) { return x * y }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, slice) {
  return slice(array)
}

