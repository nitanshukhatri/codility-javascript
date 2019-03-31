function checkPrime(num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num !== 1;
}

function palindrome(str) {
    let maxLength = 1;  // The result (length of LPS)
    let start = 0;
    let len = str.length;
    let low, high;

    // One by one consider every character as center point of 
    // even and length palindromes
    for (let i = 1; i < len; ++i) {
        // Find the longest even length palindrome with center points
        // as i-1 and i.  
        low = i - 1;
        high = i;
        while (low >= 0 && high < len && str[low] == str[high]) {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            --low;
            ++high;
        }

        // Find the longest odd length palindrome with center 
        // point as i
        low = i - 1;
        high = i + 1;
        while (low >= 0 && high < len && str[low] == str[high]) {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            --low;
            ++high;
        }
    }


    // printf("hello %d", flagLen);
    if (checkPrime(maxLength)) {
        return "YES";

    } else {
        return "NO";
    }


}
console.log(palindrome('random12321random'));
console.log(palindrome('random1232321random'));