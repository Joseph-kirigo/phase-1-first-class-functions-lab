// Code your solution in this file!
let returnFirstTwoDrivers=function(drivers){
    return [...drivers].slice(0,2)
}

let returnLastTwoDrivers= function(drivers){
    return [...drivers].slice(-2)
}

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

let createFareMultiplier=function(fare){
    return function(price){
        return fare*price;
    }
}

let fareDoubler=createFareMultiplier(2);
let fareTripler=createFareMultiplier(3)


function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}