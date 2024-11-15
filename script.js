// Question 1
function displayDateTime() {
    var currentDate = new Date();
    document.write("Current Date and Time: " + currentDate);
}

// Question 2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}

// Question 3
function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
    alert("The sum is: " + sum);
}

// Question 4
function calculator(num1, num2, operator) {
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operator!";
    }
    document.write("Result: " + result);
}

// Question 5
function squareNumber(num) {
    var result = num * num;
    return result;
}

// Question 6
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Question 7
function displayCounting(start, end) {
    var count = "";
    for (var i = start; i <= end; i++) {
        count += i + " ";
    }
    document.write("Counting: " + count);
}

// Question 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    
    document.write("The length of the hypotenuse is: " + hypotenuse);
}

// Question 9
function calculateArea(width, height) {
    var area = width * height;
    return area;
}

var width = 5;
var height = 10;
var area = calculateArea(width, height);
document.write("Area of the rectangle: " + area);

// Question 10
function isPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        alert(str + " is a palindrome.");
    } else {
        alert(str + " is not a palindrome.");
    }
}

// Question 11
function capitalizeFirstLetter(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

var result = capitalizeFirstLetter('the quick brown fox');
alert(result);

// Question 12
function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

var result = findLongestWord('Web Development Tutorial');
alert(result);

// Question 13
function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

var result = countLetterOccurrences('JSResourceS.com', 'o');
alert("Occurrences of 'o': " + result);

// Question 14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    alert("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    alert("The area is " + area);
}
