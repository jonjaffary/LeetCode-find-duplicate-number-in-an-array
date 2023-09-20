let sortedArray = nums.sort();
for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] > sortedArray[i]) {

    } else {
        return sortedArray[i]
    }
}