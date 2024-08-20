// Arrays

// let arr = prompt("enter num");
// num=arr.toString().split("");
// let RightDigt = num[0];
// console.log(RightDigt)


// function numbers(arr) {
//     positiveCount = 0;
//     negativeCount = 0;
//     evenCount = 0;
//     oddCount = 0;
//     for (let i = 0; i <= arr.length; i++){
//         let num = arr[i];
//         if (num > 0) {
//             positiveCount++;
//         }else if(num < 0){
//             negativeCount++;
//         }
//         if (num % 2 ===0 || num==0 ){
//             evenCount++;
//         }else if (num % 2 !== 0 || num != 0) {
//             oddCount++;
//         }
//     }
//     return {
//         positiveCount: positiveCount,
//         negativeCount: negativeCount,
//         evenCount: evenCount,
//         oddCount: oddCount
//     };
// }
// let myArray = [5, 7, -2, 0, 4, -8, -3, 6];

// let counts = numbers(myArray);
// console.log("Positive numbers: " + counts.positiveCount);
// console.log("Negative numbers: " + counts.negativeCount);
// console.log("Even numbers: " + counts.evenCount);
// console.log("Odd numbers: " + counts.oddCount);


// function filterIntegers(arr) {
//     return arr.filter(item => Number.isInteger(item));
// }

// // Example 1:
// let input1 = [1, NaN, 2, 'a', 'aba'];
// let output1 = filterIntegers(input1);
// console.log(output1); // Output: [1, 2]

// // Example 2:
// let input2 = ['Ahmed', 12, 'Mohamed', 34, 'Mahmoud', 12, 54];
// let output2 = filterIntegers(input2);
// console.log(output2); // Output: [12, 34, 12, 54]

// function customSlice(array, start = 0, end = array.length) {
//     let result = [];
//     if (start < 0) {
//         start = array.length + start;
//     }
//     if (end < 0) {
//         end = array.length + end;
//     }
//     for (let i = start; i < end && i < array.length; i++) {
//         result.push(array[i]);
//     }
//     return result;
// }

// // Example
// let arr1 = [1, 2, 3, 4, 5];
// let slicedArr1 = customSlice(arr1, 1, 4);
// console.log(slicedArr1);

// function findLargestInEachSubArray(arrays) {
//     return arrays.map(subArray => {
//         return Math.max(...subArray);
//     });
// }
// // Example
// let input1 = [[1, 2, 3, 4], [45, 73, 12], [13, 13, 10]];
// let output1 = findLargestInEachSubArray(input1);
// console.log(output1); // Output: [4, 73, 13]

// function abbreviateString(s) {
//     if (s.length > 10) {
//         let firstChar = s.charAt(0);
//         let lastChar = s.charAt(s.length - 1);
//         let middleCount = s.length - 2;

//         return `${firstChar}${middleCount}${lastChar}`;
//     } else {
//         return s;
//     }
// }
// // Example 1
// let input1 = "word";
// console.log(abbreviateString(input1)); // Output: word

// // Example 2
// let input2 = "internationalization";
// console.log(abbreviateString(input2)); // Output: i18n

// // Example 3
// let input3 = "pneumonoultramicroscopicsilicovolcanoconiosis";
// console.log(abbreviateString(input3)); // Output: p43s


// function hasTwoKindsOfCharacters(s) {
//     // Check if the string length is exactly 4
//     if (s.length !== 4) {
//         return false;
//     }

//     const frequency = {};
//     for (let char of s) {
//         frequency[char] = (frequency[char] || 0) + 1;
//     }
//     const counts = Object.values(frequency);
//     return counts.length === 2 && counts.every(count => count === 2);
// }

// // Example 1
// let input1 = "ASSA";
// console.log(hasTwoKindsOfCharacters(input1)); // Output: True

// // Example 2
// let input2 = "STTO";
// console.log(hasTwoKindsOfCharacters(input2)); // Output: False

// // Example 3
// let input3 = "FFEE";
// console.log(hasTwoKindsOfCharacters(input3)); // Output: True


// function checkWinner(board) {
    //     for (let i = 0; i < 3; i++) {
    //         if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
    //             if (board[i][0] === 'X') return 'X';
    //             if (board[i][0] === 'O') return 'O';
    //         }
    //     }
    //     for (let i = 0; i < 3; i++) {
    //         if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
    //             if (board[0][i] === 'X') return 'X';
    //             if (board[0][i] === 'O') return 'O';
    //         }
    //     }
    //     if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    //         if (board[0][0] === 'X') return 'X';
    //         if (board[0][0] === 'O') return 'O';
    //     }
    //     if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    //         if (board[0][2] === 'X') return 'X';
    //         if (board[0][2] === 'O') return 'O';
    //     }
    // No winner
    // return 'No winner';
    // }

    // Example 1
    // let board1 = [
    //     ['X', 'O', 'X'],
    //     ['X', 'O', 'O'],
    //     ['X', 'X', 'X']
    // ];
    // console.log(checkWinner(board1));

    // // Example 2
    // let board2 = [
    //     ['X', 'X', 'O'],
    //     ['O', 'O', 'X'],
    //     ['O', 'X', 'O']
    // ];
    // console.log(checkWinner(board2));


    
    // function findCharacterIndices(arr, char) {
    //     let firstIndex = -1;
    //     let lastIndex = -1;

    
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] === char) {
    //             if (firstIndex === -1) {
    //                 firstIndex = i;
    //             }
    //             lastIndex = i;
    //         }
    //     }

    
    //     if (firstIndex === -1) {
    //         return "Character not found";
    //     }

    //     return [firstIndex, lastIndex];
    // }
    // // Example 1
    // let input1 = ['h', 'e', 'l', 'l', 'o'];
    // let char1 = 'l';
    // console.log(findCharacterIndices(input1, char1)); // Output: [2, 3]
    // // Example 2
    // let input2 = ['c', 'i', 'r', 'c', 'u', 'm', 'l', 'o', 'c', 'u', 't', 'i', 'o', 'n', 'n', 'n'];
    // let char2 = 'c';
    //     console.log(findCharacterIndices(input2, char2)); // Output: [0, 8]

    
    
// function canObtainSum(arr, target) {
//     let start = 0;
//     let sum = 0;
//     for (let end = 0; end < arr.length; end++) {
//         sum += arr[end];
    
//         while (sum > target && start <= end) {
//             sum -= arr[start];
//             start++;
//         }
    
//         if (sum === target) {
//             return true;
//         }
//     }
//     return false;
// }

// // Example 1
// let input1 = [1, 2, 3, 4, 5];
// let target1 = 7;
// console.log(canObtainSum(input1, target1)); // Output: True
// // Example 2
// let input2 = [1, 2, 3, 4, 5];
// let target2 = 10;
// console.log(canObtainSum(input2, target2)); // Output: True


// function reverseString(str) {
//     return str.split('').reverse().join('');
// }



// // Example 1
// let input1 = "hello";
// console.log(reverseString(input1)); // Output: "olleh"


//

// function areStringsEqual(str1, str2) {
    
//     return str1.toLowerCase() === str2.toLowerCase();
// }



// // Example 1
// let input1 = ['Eraa', 'eraa'];
// console.log(areStringsEqual(input1[0], input1[1])); // Output: true

// // Example 2
// let input2 = ['Mohamed', 'Moamen'];
// console.log(areStringsEqual(input2[0], input2[1])); // Output: false



// function isAllUppercase(str) {
    
//     return str === str.toUpperCase();
// }

// // Example usage:

// // Example 1
// let input1 = "HELLO";
// console.log(isAllUppercase(input1)); // Output: true

// // Example 2
// let input2 = "Hello";
// console.log(isAllUppercase(input2)); // Output: false

// function checkNumbers(num1, num2) {
//     return num1 === 15 || num2 === 15 || (num1 + num2 === 15);
// }


// // Example 1
// let input1 = [5, 15];
// console.log(checkNumbers(input1[0], input1[1])); // Output: true

// // Example 2
// let input2 = [10, 5];
// console.log(checkNumbers(input2[0], input2[1])); // Output: true

// // Example 3
// let input3 = [5, 5];
// console.log(checkNumbers(input3[0], input3[1])); // Output: false


// function isPerfectSquare(num) {
//     if (num < 0) return false; 

    
//     const sqrt = Math.sqrt(num);

//     const roundedSqrt = Math.floor(sqrt);

    
//     return roundedSqrt * roundedSqrt === num;
// }



// // Example 1
// let input1 = 16;
// console.log(isPerfectSquare(input1)); // Output: true

// // Example 2
// let input2 = 20;
// console.log(isPerfectSquare(input2)); // Output: false


