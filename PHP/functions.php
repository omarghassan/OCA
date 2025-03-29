<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <h1>Hello</h1>
    <h3>My name is Omar</h3>

</body>
</html> -->
    
<?php
    // echo "I am Omar Ghassan Abu Deyak, a Full Stack Web Developer"

    // 1- Write a PHP script to check if the inserted number is a prime number 
    // function checkPrime($num) {
    //     if ($num <= 1) {
    //         echo "Number {$num} is NOT a prime number";
    //         return;
    //     }
    
    //     for ($i = 2; $i <= sqrt($num); $i++) {
    //         if ($num % $i === 0) {
    //             echo "Number {$num} is NOT a prime number";
    //             return;
    //         }
    //     }
    
    //     echo "Number {$num} is a prime number";
    // }

    // checkPrime(6)

    // 2- Write a PHP script to reverse a string 

    // function reverseString($str) {
        
    //     for ($i = strlen($str) - 1; $i >= 0; $i--) {
    //         echo $str[$i];
    //     }
    // }

    // reverseString("Hello")

    // 3- Write a PHP script to check if the all string characters are lower cases

    // function checkLowerCase($str) {
    //     for ($i = 0; $i < strlen($str); $i++) {
    //         if ($str[$i] !== strtolower($str[$i])) {
    //             echo "String is not lower case <br>";
    //             return;
    //         }
    //     }
    //     echo "All string characters are lower case <br>";
    // }

    // checkLowerCase("Hello")

    // 4- Write a PHP function to swap to variables

    // function swapValues($num1, $num2) {

    //     $num1 = $num1 + $num2;
    //     $num2 = $num1 - $num2;
    //     $num1 = $num1 - $num2;

    //     echo "Number 1 = {$num1} <br>";
    //     echo "Number 2 = {$num2} <br>";
    // }

    // swapValues(12, 10)

    // 5- Write a PHP function to swap to variables

    // function swapValues($num1, $num2) {

    //     $num1 = $num1 + $num2;
    //     $num2 = $num1 - $num2;
    //     $num1 = $num1 - $num2;

    //     echo "Number 1 = {$num1} <br>";
    //     echo "Number 2 = {$num2} <br>";
    // }

    // swapValues(12, 10)

    // 6- Write a PHP function to check if a number is an Armstrong number
    // function isArmstrong($num) {
    //     $sum = 0;
    //     $temp = $num;
    //     $numLen = strlen((string)$num);
    
    //     while ($temp != 0) {
    //         $digit = $temp % 10;
    //         $sum += pow($digit, $numLen);
    //         $temp = (int)($temp / 10);
    //     }
    
    //     if ($sum == $num) {
    //         echo "$num is an Armstrong number.";
    //     } else {
    //         echo "$num is NOT an Armstrong number.";
    //     }
    // }
    
    // isArmstrong(407)

    // 7- Write a PHP function that checks if a passed string is a palindrome
    // function isPalindrome($str) {
    //     $removeSpacesAndPunctuation = strtolower(preg_replace("/[^A-Za-z0-9]/", '', $str));
        
    //     if ($removeSpacesAndPunctuation === strrev($removeSpacesAndPunctuation)) {
    //         echo "$str is a palindrome.";
    //     } else {
    //         echo "$str is NOT a palindrome.";
    //     }
    // }

    // isPalindrome("Eva, can I see bees in a cave")

    // 8- Write a PHP function to remove duplicates from an array
    function removeDuplicates($array) {
        $uniqueArray = array();
    
        foreach ($array as $value) {
            
            $isDuplicate = false;
            foreach ($uniqueArray as $uniqueValue) {
                if ($uniqueValue === $value) {
                    $isDuplicate = true;
                    break;
                }
            }
    
            if (!$isDuplicate) {
                $uniqueArray[] = $value;
            }
        }
    
        var_dump($uniqueArray);
    }

    $arrayToCheck = array(1, 2, 2, 3, 4, 5, 4, 7);
    removeDuplicates($arrayToCheck)
    
?>