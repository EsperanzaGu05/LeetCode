var twoSum = function (nums, target) {
    // Create a map to store the indices of previously seen elements
    const numIndices = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (numIndices.has(complement)) {
            // Return the indices of the two numbers that add up to the target
            return [numIndices.get(complement), i];
        }

        // If the complement is not found, store the current number and its index in the map
        numIndices.set(nums[i], i);
    }

    // If no solution is found
    return [];
};

console.log(twoSum([3, 7, 10, 15, 2], 5))