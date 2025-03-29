<?php

    // 1- Write a PHP script to:
    $str = "Hello world";

    // A- Convert the entered string to uppercase.
    echo strtoupper($str) . "<br>";

    // Convert the entered string to lowercase.
    echo strtolower($str) . "<br>";

    // c. Make the first letter of the string uppercase.
    echo ucfirst($str) . "<br>";
    
    // d. Make the first letter of each word capitalized.
    echo ucwords($str) . "<br>";

    // 2- Write a PHP script splitting the following numeric string to be a date format
    $toDate = "085119";
    $timeParts = str_split($toDate, 2);
    $formattedTime = implode(':', $timeParts);

    echo $formattedTime . "<br>";

    // 3- Write a PHP script to check whether the sentence contains a specific word
    $searchStr = "I am a full stack developer at orange coding academy";

    function searchString($str, $word) {
        $strToSearch = strpos($str, $word);

        if($strToSearch) {
            echo "Word {$word} is found <br>";
        }
    }

    searchString($searchStr, "orange");
    
    // 4- Write a PHP script to extract the file name from the URL
    $url = "http://www.orange.com/index.php";

    $path = parse_url($url, PHP_URL_PATH);

    $fileName = basename($path);

    echo $fileName . "<br>";

    // 5- Write a PHP script to extract the username from the following email address.
    $email = "info@orange.com";

    $parts = explode('@', $email);

    $username = $parts[0];

    echo $username . "<br>";

    // 6- Write a PHP script to get the last three characters from the string.
    $strToSlice = "info@orange.com";

    echo substr($strToSlice, -3, 3) . "<br>";

    // 7- Write a PHP script to generate simple random passwords [do not use rand () function] from a given string.
    function generateRandomPassword($characters, $length) {
        $password = '';
        
        $shuffledCharacters = str_shuffle($characters);
        
        $charLength = strlen($shuffledCharacters);
    
        for ($i = 0; $i < $length; $i++) {
            $index = mt_rand(0, $charLength - 1);
            $password .= $shuffledCharacters[$index];
        }
    
        echo $password . "<br>";
    }
    
    $passwordGenerateFrom = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz";

    generateRandomPassword($passwordGenerateFrom, 8);

    // 8- Write a PHP script to replace the first word of the sentence with another word.
    $strToReplace = "That new trainee is so genius";

    echo str_replace("That", "Our", $strToReplace) . "<br>";

    // 9- Write a PHP script to find the first character that is different between two strings
    $str1 = 'football';
    $str2 = 'footboll';

    // Calculate the position of the first difference between the two strings
    $str_pos = strspn($str1 ^ $str2, "\0");

    // Output the position of the first difference along with the characters at that position
    printf('First difference between two strings at position %d: "%s" vs "%s"',
        $str_pos, $str1[$str_pos], $str2[$str_pos]);
    printf("\n");

    // 10- Write a PHP script to put a string in an array, use the (var_dump) to view the array
    $strToArray = "Twinkle, twinkle, little star";

    $transformToArray = explode(" ", $strToArray);

    var_dump($transformToArray);

    // 11- Write a PHP script to print the next letter of the inputted letter
    $char = 'a';
    $next_char = ++$char;
    if (strlen($next_char) > 1) 
    {
    $next_cha = $next_char[0];
    }
    echo $next_char . "<br>";

    // 12- Write a PHP script to insert a string at the specified position in a given string.
    $originalStr = "The brown fox";

    echo substr_replace($originalStr, "quick ", 4, 0) . "<br>";

    // 13- Write a PHP script to remove zeroes from the given number
    $removeZeros = "0000657022.24";

    echo str_replace("0", "", $removeZeros) . "<br>";

    // 14- Write a PHP script to remove part of a string.
    $removeFox = "The quick brown fox jumps over the lazy dog";

    echo str_replace("fox", "", $removeFox) . "<br>";

    // 15- Write a PHP script to remove trailing dashes from a string
    $removeTrails = "The quick brown fox jumps over the lazy dog---";

    echo str_replace("---", "", $removeTrails) . "<br>";

    // 16- Write a PHP script to remove Special characters from the following string.
    $removeSpecialChars = "'\"\1+2/3*2:2-3/4*3";

    echo str_ireplace(array('\'', '/', '"', ',' , ';', ':', '+', '*', '-'), " ", $removeSpecialChars) . "<br>";

    // 17- 
    $select5Words = "'The quick brown fox jumps over the lazy dog";
    echo implode(' ', array_slice(explode(' ', $select5Words), 0, 5))."<br>";

    // 18- Write a PHP script to remove comma(s) from the following numeric string
    $removeCommas = "2,543.12";

    echo str_replace(",", "", $removeCommas) . "<br>";

    // 19- Write a PHP script to print letters from 'a' to 'z'
    for ($x = ord('a'); $x <= ord('z'); $x++)
    // Loop through ASCII values of lowercase letters from 'a' to 'z'.

    echo chr($x) . "\n";
    // Convert ASCII value to corresponding character and echo.
?>  