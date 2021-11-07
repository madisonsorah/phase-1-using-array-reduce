const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// New variable totalBatteries holds the sum of each battery amount in batteryBatches
const totalBatteries = batteryBatches.reduce(function(sum, element) {
    return element + sum}, 0);
