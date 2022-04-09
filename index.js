const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (quadrupleValue) {
    return function (value) {
        return quadrupleValue * value;
    };
};

const fareDoubler = function createFareMultiplier (fare) {
    return fare * 2;
}

const fareTripler = function createFareMultiplier (fare) {
    return fare * 3;
}

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}