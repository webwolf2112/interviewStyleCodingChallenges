//Given an array of numbers and a sum number, return the value of any two numbers from the array that adds up to the sum.
// For example, given [5, 15, 3, 7] and sum of 15, return true since 15 + 5 is 15.

function findSumBrute(arr, sum) {
    let tempObject = {};
    let returnNumbers = '';

    for(var i =0; i < arr.length; i++) {
        for(var k = 0; k < arr.length -1; k++) {
            if( arr[i] + arr[k] === sum && i !== k) {
                returnNumbers = `${arr[i]} ${arr[k]}`;
            }
        }
    }
    console.log(returnNumbers);
    return returnNumbers;
}


function findSumWithSet(arr, sum) {
    let seenNumbers = new Set();
    for(let val in arr) {
        let num = arr[val];
        if (seenNumbers.has(sum - num)) {
            console.log(`${num} ${sum-num}`);
            return `${num} ${sum-num}`;
        } 
        seenNumbers.add(num);
    }
}

findSumBrute([10,15,3,7], 17)
findSumBrute([5, 6, 10, 15], 20);

findSumWithSet([10,15,3,7], 17)
findSumWithSet([5, 6, 10, 15], 20);

// TODO after you have learned how to do a Bianary Search

// Yet another solution involves sorting the list. We can then iterate through the list and run a binary search on K - lst[i]. Since we run binary search on N elements, this would take O(N log N) with O(1) space.
// from bisect import bisect_left


// def two_sum(lst, K):
//     lst.sort()

//     for i in range(len(lst)):
//         target = K - lst[i]
//         j = binary_search(lst, target)

//         # Check that binary search found the target and that it's not in the same index
//         # as i. If it is in the same index, we can check lst[i + 1] and lst[i - 1] to see
//         #  if there's another number that's the same value as lst[i].
//         if j == -1:
//             continue
//         elif j != i:
//             return True
//         elif j + 1 < len(lst) and lst[j + 1] == target:
//             return True
//         elif j - 1 >= 0 and lst[j - 1] == target:
//             return True
//     return False

// def binary_search(lst, target):
//     lo = 0
//     hi = len(lst)
//     ind = bisect_left(lst, target, lo, hi)

//     if 0 <= ind < hi and lst[ind] == target:
//         return ind
//     return -1