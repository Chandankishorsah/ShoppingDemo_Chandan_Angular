import { Component } from '@angular/core';

@Component({
  selector: 'app-logic',
  standalone: true,
  imports: [],
  templateUrl: './logic.component.html',
  styleUrl: './logic.component.scss'
})
export class LogicComponent {
  constructor(){
  var a=  this.findLongestWord();
 console.log(this.isPalindrome('abbax'))
  console.log(this.removeDuplicates(['hello','priya','hello','prity','priya']))
  console.log(this.ReverseString('nandu'));
  console.log(this.factorial(4));
  console.log(this.SortArrayBubble([32,30,45,15,91,19,10,11,31,2,5,1,6]));
  console.log(this.mergeSortedArrays([31,3,56,2,6,0,1,23,3],[32,43,23,44,64,19,1,30]));
  const arr1 = [1, 2, 3, 2];
const arr2 = [1, 4, 9, 4];
console.log(this.isSquarePresent(arr1, arr2));
  }
// 1.Program to find longest word in a given sentence?
findLongestWord() {
  let str = "I love programming in angular";
  let words = str.split(" "); // Split the sentence into words
  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word; // Update longestWord if the current word is longer
    }
  });

  return longestWord // Output the longest word
}
// 2.How to check whether a string is palindrome or not?
isPalindrome(str:any) {

// if(str===str.split('').reverse('').join('')){
//   console.log("it is palindrome")
// }
// else{
//   console.log("it is not palindrome")
// }
return str===str.split('').reverse('').join('')?true:false
}
// 3.Write a program to remove duplicates from an array?
removeDuplicates(arr: any[]) {
  // return [...new Set(arr)]; // Output: [1, 2, 3,
//   let unique:any=[]
//   for(let i=0;i<arr.length;i++){
// if(!unique.includes(arr[i])){
//   unique.push(arr[i])
// }

//   }
//   return unique

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1);
        j--;
      }
    }
  }
  return arr
}
// 4.  Program to find Reverse of a string without using built-in method?
ReverseString(str:string){
// let x=str.split('');

// for(let i=0;i < Math.floor(x.length / 2); i++){
//   [x[i],x[x.length-i-1]]=[x[x.length-i-1],x[i]];
// }
// return x.join('');
let reversedString = "";
for(let i=str.length-1;i>0;i--){
reversedString+=str[i]
}
return reversedString
}

// 5.Find the max count of consecutive 1’s in an array?
maxConsecutiveOnes(arr: number[]): number {
  // Join the array into a string, split by '0', and calculate the max length of '1's
  // return Math.max(...arr.join('').split('0').map(segment => segment.length));
  return Math.max(...arr.join('').split('0').map((el)=>el.length));
}
// 6.Find the factorial of a given number?
factorial(n: number): number {
  return n===0?1:n*this.factorial(n-1);
}
SortArrayBubble(arr:any[]){
  // let arr=[1,5,3,7,2,9,4,6];
  let n=arr.length;
  for(let i=0;i<n-1;i++){
for(let j=0;j<n-1-i;j++){
  if(arr[j]>arr[j+1]){
    const temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
  }
}
  }
  return arr;
}
// 7.Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]?
mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  let result = [...arr1, ...arr2];
  let n=result.length;
  for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
      if(result[j]>result[j+1]){
        const temp=result[j];
        result[j]=result[j+1];
        result[j+1]=temp;
      }
    }
  }
  return [...new Set(result)];
}
// 8.•  Create a function which will accept two arrays arr1 and arr2. 
// The function should return true 
// if every value in arr1 has its corresponding value squared in
//  array2. The frequency of values must be the same.
isSquarePresent(arr1: number[], arr2: number[]): boolean {
  // // If the lengths are not the same, return false
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }

  // // Create frequency counters for both arrays
  // const frequencyCounter1: Record<number, number> = {};
  // const frequencyCounter2: Record<number, number> = {};

  // // Count the frequency of each number in arr1
  // for (let num of arr1) {
  //   frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  // }

  // // Count the frequency of each number in arr2
  // for (let num of arr2) {
  //   frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  // }

  // // Check if every value in arr1 has its squared counterpart in arr2
  // for (let key in frequencyCounter1) {
  //   const squaredKey = Math.pow(Number(key), 2);
  //   if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
  //     return false; // Mismatch in frequency
  //   }
  // }

  // return true; // All checks passed
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort((a:any,b:any)=>a-b);
  arr2.sort((a:any,b:any)=>a-b);
  for(let i=0;i<arr1.length;i++){
    if(arr1[i]**2!==arr2[i]){
      return false;
  }
}
  return true;

}

}
