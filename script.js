nums = [3, 2, 5, 14, 5, 5, 19, 18, 11, 10, 1, 4, 5, 5, 5, 5, 12, 5, 17, 5];
let sortedArray = nums.sort((a, b) => a - b);
for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] > sortedArray[i]) {

    } else {
        console.log(sortedArray[i])
    }
}