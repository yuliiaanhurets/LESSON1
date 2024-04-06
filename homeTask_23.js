let containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false
}

containsDuplicate([1, 3, 4, 5, 4]);

let reverseString = function (stringArray) {
    let newString = [];

    for (let i = stringArray.length - 1; i >= 0; i--) {
        newString.push(stringArray[i])
    }

    return newString;
}

reverseString(["H", "e", "l", "l", "o"])