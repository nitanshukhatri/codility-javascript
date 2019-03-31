

// // Assuming only lower case characters 
// const CHARS = 26;

// /* To check a string S can be converted to a “valid” 
//    string by removing less than or equal to one 
//    character. */
// function solution(str) {
//     // let freq[CHARS] = {0}; 
//     let freq = [0] * CHARS

//     // freq[] : stores the  frequency of each 
//     // character of a string 
//     for (let i = 0; i < str.length; i++) {
//         freq[str[i] - 'a'] += 1
//     }

//     // Find first character with non-zero frequency 
//     let i, freq1 = 0, count_freq1 = 0;
//     for (let i = 0; i < CHARS; i++) {
//         if (freq[i] != 0) {
//             freq1 = freq[i];
//             count_freq1 = 1;
//             break;
//         }
//     }

//     // Find a character with frequency different 
//     // from freq1. 
//     let j, freq2 = 0, count_freq2 = 0;
//     for (let j = i + 1; j < CHARS; j++) {
//         if (freq[j] != 0) {
//             if (freq[j] == freq1)
//                 count_freq1++;
//             else {
//                 count_freq2 = 1;
//                 freq2 = freq[j];
//                 break;
//             }
//         }
//     }

//     // If we find a third non-zero frequency 
//     // or count of both frequencies become more 
//     // than 1, then return false 
//     for (let k = j + 1; k < CHARS; k++) {
//         if (freq[k] != 0) {
//             if (freq[k] == freq1)
//                 count_freq1++;
//             if (freq[k] == freq2)
//                 count_freq2++;
//             else  // If we find a third non-zero freq 
//                 return false;
//         }

//         // If counts of both frequencies is more than 1 
//         if (count_freq1 > 1 && count_freq2 > 1)
//             return false;
//     }

//     // Return true if we reach here 
//     return true;
// }

// console.log(solution('aabbcccc'));

// function isValid(s) {
//     let GOOD = "YES";
//     let BAD = "NO";

//     if (s.length === 0) return BAD;
//     if (s.length <= 3) return GOOD;

//     letters = new Array(26);
//     for (let i = 0; i < s.length; i++) {
//         letters[s.charAt(i) - 'a'] += 1;
//     }
//     letters = letters.sort();
//     let i = 0;
//     while (letters[i] == 0) {
//         i++;
//     }
//     //System.out.println(Arrays.toString(letters));
//     let min = letters[i];   //the smallest frequency of some letter
//     let max = letters[25]; // the largest frequency of some letter
//     let ret = BAD;
//     if (min == max) ret = GOOD;
//     else {
//         // remove one letter at higher frequency or the lower frequency 
//         if (((max - min == 1) && (max > letters[24])) ||
//             (min == 1) && (letters[i + 1] == max))
//             ret = GOOD;
//     }
//     return ret;
// }

// function isValid(str) {

//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         if (typeof obj[str.charAt(i)] === 'undefined') {
//             obj[str.charAt(i)] = 1;
//         } else {
//             obj[str.charAt(i)]++;
//         }
//     }
//     var count = 0;
//     var prev, curr, bPrev;
//     var valid = true;
//     //console.log(obj)
//     for (var key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             curr = obj[key];
//             if (typeof prev === 'undefined') {
//                 prev = curr;
//             }
//             //console.log(curr,prev,bPrev)
//             if (curr !== prev) {
//                 if (curr !== 1 && Math.abs(curr - prev) !== 1) {
//                     if (prev !== 1) {
//                         //console.log('here1')
//                         valid = false;
//                         break;
//                     }
//                 }
//                 if (typeof bPrev === 'undefined') {
//                     //count =1;
//                     bPrev = prev;
//                 } else {
//                     if (curr !== bPrev) {
//                         //console.log('here2')
//                         valid = false;
//                         break;
//                     }
//                 }
//                 prev = curr;
//             } else if (typeof bPrev !== 'undefined') {
//                 if (bPrev !== curr) {
//                     //console.log('here3')
//                     valid = false;
//                     break;
//                 }
//             }
//         }
//     }
//     if (valid) {
//         return "YES"
//     } else {
//         return 'NO';
//     }

// }

function processData(input) {

    // Not so nice input...
    input = input.split("\n")[0];

    var cmap = {};

    // First, count letters occurences
    for (var i = 0; i < input.length; i++) {
        if (cmap[input[i]]) cmap[input[i]]++;
        else cmap[input[i]] = 1;
    }
    //console.log(cmap);

    var diffcount = {};
    // Next, reduce the number of different counts
    for (var j in cmap) {
        if (diffcount[cmap[j]]) diffcount[cmap[j]]++;
        else diffcount[cmap[j]] = 1;
    }
    //console.log(diffcount);

    // Analyze
    // case 1 : I have only one count of chars => OK
    // Case 2 : I have 2 different counts, X & Y. One count must not exceed 1.
    // Case 3 : I have 3+ different counts => KO
    var k = Object.keys(diffcount);
    if (k.length == 1 ||
        (k.length == 2 && (diffcount[k[0]] == 1 || diffcount[k[1]] == 1))) {
        console.log("YES");
    } else {
        console.log("NO");
    }

}


console.log(isValid('aabbcccf'));
