/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}

    Brute force: sort the array in decreasing order and get the kth index value. 
    Time complexity: O(nlogn);
    Space complexity: O(n);


    Core Algorithm: use some structure to dynamically store/update the kth largest integer in the unsorted array. 
                    a k sized minHeap would be the choice, if any character is larger than the smallest top element of 
                    minHeap, dequeue, and enqueue(newElement), finally return the top. 

    Time complexity: O(n * logk)
    Space complexity: O(k);

 */
var kthLargestNumber = function(nums, k) {
    // edge cases: 
    if (nums === null || nums === undefined || nums.length <= 0 || k > nums.length) {
        throw new Error("Invalid inputs!");
    }

    

    let minHeap = new PriorityQueue({
        compare: (a, b) => a - b,
    });

    for (let i = 0; i < nums.length; i++) {
        var curI = nums[i];
        var valueOfCurI = BigInt(curI);

        if (i < k) {
            minHeap.enqueue(valueOfCurI);
        // since duplicate should 
        } else if (valueOfCurI > minHeap.front()) {
            minHeap.dequeue();
            minHeap.enqueue(valueOfCurI);
            // console.log("currentValueString: ", curI);
            // console.log("currentValue: ", valueOfCurI);
        }
    }


    // console.log(minHeap.toArray());
    return `${minHeap.front()}`;
};
