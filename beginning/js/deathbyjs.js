//STEP 1
// function order(str) {
// return str.split('').sort().join('');
//   }
// console.log(order("webmaster"));


//STEP 2

// function  upper(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// console.log( upper('the quick brown fox'));


//STEP 3


// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {
//     let count = 0;

//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }

//     return count
// }

// const string = "The quick brown fox";

// const result = countVowel(string);

// console.log(result);

//STEP 4

// let r = Math.random().toString(36).substring();
// console.log( r);




//STEP 5


// function Longest_Country_Name(countries) {
//     let longestCountry = countries[0];
//     for (let country of countries) {
//         if (country.length > longestCountry.length) {
//             longestCountry = country;
//         }
//     }
//     return longestCountry;
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
