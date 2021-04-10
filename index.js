const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries(total, element){
    return element + total
}

batteryBatches.reduce(totalBatteries, 0);
