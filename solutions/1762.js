/**
 * @param {number[]} heights
 * @return {number[]}

 using dynmic programming: 
 const preMax;


 Time Complexity: O(n);
 Space Complexity: O(1);

 */
 var findBuildings = function(heights) {
    // edge cases
    if (!heights || heights.length <= 0) {
        return 0;
    }

    // normal cases: 
    let previousMaxHeight = 0;
    const result = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        // compare current and previous max: 
        const curHeight = heights[i];
        if (curHeight > previousMaxHeight) {
            result.push(i);
            previousMaxHeight = curHeight;
        }
    }


    const resultLen = result.length - 1;
    for (let i = 0; i <= resultLen / 2; i++) {
        let curValue = result[i];
        result[i] = result[resultLen - i];
        result[resultLen - i] = curValue;
    }
    
    return result; 
};