// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if(distance > 42)
        return distance - 42;
    else 
        return 42 - distance;
}

function distanceFromHqInFeet(distance){
    if(distance > 42)
        return (distance - 42) * 264;
    else 
        return (42 - distance) * 264;
}

function distanceTravelledInFeet(from, to){
    if(from < to)
        return (to - from) * 264;
    else
        return (from - to) * 264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400)
        return 0;
    else if(distance> 400 && distance <= 2000)
        return ((distance - 400) * 2) / 100;
    else if(distance > 2000 && distance <= 2500)
        return 25;
    else
        return 'cannot travel that far';
}