console.log('hi');
 function reverseStr(str){
   let i=0;
   let j=str.length-1;
   while(i<j){
     let temp=str[i];
     str[i]=str[j];
     str[j]=temp;
     i++;
     j--;
   }
   return str;
 }
// reverse a string

function revArr(str) {
  let rtnArr= [];
  for (let i =str.length-1; i>=0; i--){
    rtnArr += str[i];
  }
  return rtnArr;
}


// palindrom check

function isPalindrom(str){
  let len=str.length;

  for(let i=0; i<len/2; i++){
    if(str[i] !== str[len-1-i]){
      return false;
    }
    return true;
  }
}

//anagram check

function isAnagram (str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    var sortStr1 = str1.split('').sort().join('');
    var sortStr2 = str2.split('').sort().join('');

    return (sortStr1 === sortStr2);


// Given an array get the largest possible value by multiplying two integers.


function largeValue(arr1) {
   var num = arr.sort();
    var retNum1 = num.length[0] * num.length[1];
    var retNum2 = num.length[num.length-1] * num[num.length-2];
    if( retNum1 > retNum2){
      return retNum1;
    } else {
      retNum2;
    }
}





















}
