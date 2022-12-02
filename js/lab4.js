/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  
  /* takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
  function isVowel(myChar){
      if(myChar.length > 1){ return false; }
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      return res = vowels.includes(myChar.toLowerCase());
  }
  
  /* sums (respectively) all the numbers in an array of numbers */
  function sum(myArray){
    return result = myArray.reduce((result, item) => result + item, 0);
  }
  
  /* multiplies (respectively) all the numbers in an array of numbers */
  function multiply(myArray){
    return result = myArray.reduce((result, item) => result * item, 1);
  }
  
  /* computes the reversal of a string */
  function reverse(myString){
    return result = myString.split("").reverse().join("");
  }
  
  /* takes an array of words and returns the length of the longest one */
  function findLongestWord(myArray){
    let sizeArray = myArray.map(item => item.length);
    return Math.max(...sizeArray);
  }
  
  /* takes an array of words and an integer i and returns the array of words that are longer than i */
  function filterLongWords(myArray, i){
    return resultArray = myArray.filter(item => item.length > i);
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of isVowel('i') is 1  " + myFunctionTest(true, isVowel('i')));
  console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
  console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));
  console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));
  console.log("Expected output of findLongestWord(['AAA', 'BBBBB', 'CC']) is 5  " + myFunctionTest(5, findLongestWord(['AAA', 'BBBBB', 'CC'])));
  console.log("Expected output of filterLongWords(['AAA', 'BBBBB', 'CC'], 2) is ['AAA', 'BBBBB']  " + myFunctionTest(['AAA', 'BBBBB'], filterLongWords(['AAA', 'BBBBB', 'CC'], 2)));
  
  const a = [1,3,5,3,3]; 
  const b = a.map(function(elem, i, array) {
    return elem * 10;
  })
  console.log(b.toString() + "<br/>");
  const c = a.filter(function(elem, i, array){
    return elem === 3;});
    console.log(c.toString() + "<br/>");
  const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
  });
  console.log(d+ "<br/>");
  
  const d2 = a.find(function(elem) {return elem > 1;}); //3
  const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
  console.log(d2+ "<br/>");
  console.log(d3);