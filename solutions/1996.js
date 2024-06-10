/**
 * @param {number[][]} properties
 * @return {number}

 
 Time complexity:  O(n + nlogn);
 Space complexity: O(1);
 */
 var numberOfWeakCharacters = function(properties) {
    // get an sorted in ascending 2D array by attack value;
    // Time: O(nlogn)
    // Space: O(n)
    properties.sort((a, b) => a[0] - b[0]);
    console.log(properties);

    let pLen = properties.length;
    let prevGroupAttack = 0;
    let prevGroupMaxDefense = 0;
    let curGroupAttack = properties[pLen - 1][0];
    let curGroupMaxDefense = 0;
    let result = 0;

    for (let i = properties.length - 1; i >=0; i--) {
        curGroupAttack = properties[i][0];
        curGroupMaxDefense = properties[i][1];

        while (i >= 0 && properties[i][0] === curGroupAttack) {
            console.log("curA,curD, pA,pMD: ", curGroupAttack, properties[i][1], prevGroupAttack, prevGroupMaxDefense);
            if (curGroupAttack < prevGroupAttack && properties[i][1] < prevGroupMaxDefense) {
                
                result++;
            }

            if (properties[i][1] > curGroupMaxDefense) {
                curGroupMaxDefense = properties[i][1];
            }
            i--;
        }
        i++;
        prevGroupAttack = curGroupAttack;
        prevGroupMaxDefense = Math.max(curGroupMaxDefense, prevGroupMaxDefense);
    }

    // there might left one in the corner: 
    if (properties[0][0] < prevGroupAttack && properties[0][1] < prevGroupMaxDefense) {
        result++;
    }
    return result;
};