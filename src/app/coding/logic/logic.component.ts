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
const str1 = "listen";
const str2 = "silent";
console.log(this.AreArrangeable(str1,str2));
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" },
  { id: 2, name: "Charlie" },
];

console.log(this.Uniques(data));
console.log(this.MaxNumber([2,94,12,20,34,94,20,29]));
console.log(this.EvenNumbers([2,94,12,20,34,94,20,29]));
console.log(this.isPrime(177));
console.log(this.findLargestUsingFlat([[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]));
console.log(this.FibonacciSeries(15));
console.log(this.charCount('steetse'));
console.log(this.sortAscending([2,94,12,20,34,94,20,29]));
console.log(this.sortDescending([2,94,12,20,34,94,20,29]));
console.log(this.reverseWords('hello jai shree ram'))
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
// 9.  Give two strings. Find if one string can be formed by rearranging the letters of the other string.
AreArrangeable(str1: string, str2: string): boolean{

  if(str1.length==str2.length){
    return false;
  }
  const frequencyCounter:Record<string,number>={}
  for(let char of str1){
    frequencyCounter[char]=(frequencyCounter[char]||0)+1;
  }
  for(let char of str2){
if(!frequencyCounter[char]){
  return false;
}
frequencyCounter[char]--;
  }
  return true;
}
// 10.Write logic to get unique objects from below array?
Uniques(array:{id:number;name:string}[]):{id:number;name:string}[]{
//   const uniquesSet=new Set<string>();
// return array.filter((obj)=>{
//   const objstring=JSON.stringify(obj);
//   if(!uniquesSet.has(objstring)){
//     uniquesSet.add(objstring);
//     return true
//   }
//   return false
// })
const map=new Map<number,{id:number;name:string}>();
for(let obj of array){
  map.set(obj.id,obj)
}
return Array.from(map.values())
}
getUniqueObjects(array: { name: string }[]): { name: string }[] {
  const uniqueSet = new Set<string>();

  return array.filter((obj) => {
    if (!uniqueSet.has(obj.name)) {
      uniqueSet.add(obj.name);
      return true; // Include this object in the result
    }
    return false; // Exclude duplicates
  });
}
// 11.•  Write a JavaScript program to find the maximum number in an array.
MaxNumber(array: number[]): number {
  // return Math.max(...array);
  console.log([...new Set(array)])
  
  let max=[...new Set(array)][0];
  for(let i=0;i<[...new Set(array)].length;i++){
    if([...new Set(array)][i]>max){
      max=[...new Set(array)][i];
    }
  }
  return max
}
// 12.Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
EvenNumbers(array: number[]): number[] {
  // return array.filter((num) => num % 2 === 0);
  // let evenArray = [... new Set(array)];
  for(let i=0;i<array.length;i++){
    if(array[i]%2!==0){
      array.splice(i,1);
      i--
    }
  }
  return [...new Set(array)];
}
// 13.Write a JavaScript function to check if a given number is prime.
isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <=Math.sqrt(num); i++) {
    if(num%i===0){
return false
    }
  }
  return true
}
// 14.Write a JavaScript program to find the largest element in a nested array.
// Example: [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
findLargestUsingFlat(arr:any[]) {
  const flatArray = arr.flat(Infinity); // Flatten the array completely
  return Math.max(...flatArray); // Find the maximum value
}
// 15.  Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
FibonacciSeries(n:number){
if(n<=0) return [];
if(n==1)return [0]
const sequence=[0,1];
for(let i=2;i<n;i++){
  sequence.push(sequence[i-1]+sequence[i-2])
}
return sequence
}
// 16.•  Given a string, write a JavaScript function to count the occurrences of each character in the string.
charCount(str: string) {
  const occurrences:any={};
  for(let char of str){
    if(occurrences[char]){
occurrences[char]++;

    }
    else{
      occurrences[char]=1
    }
  }
  return occurrences
}
// 17.  Write a JavaScript function that sorts an array of numbers in ascending order.
sortAscending(arr: number[]) {
  // return arr.sort((a, b) => a - b);
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
    
  }
  return arr
}
// 18.•  Write a JavaScript function that sorts an array of numbers in descending order.
sortDescending(arr: number[]) {
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]<arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr
}
// 19•  Write a JavaScript function that reverses the order of words in a sentence without using the built-in reverse() method.
reverseWords(sentence: string) {
  // let words=sentence.split(' ');
  // let reversed:any=[];
  // for(let i=words.length-1;i>=0;i--){
  //  reversed.push(words[i])
  // }
  // return reversed.join(' ')
  let words=sentence.split(' ');
  let start=0;
  let end=words.length-1;
  while(start<end){
    let temp=words[start];
    words[start]=words[end];
    words[end]=temp;
    start++;
    end--;
  }
  return words.join(' ')
}
// 20.•  Implement a JavaScript function that flattens a nested array into a single-dimensional array.
flattenArray(arr:any) {
  // return arr.reduce((acc:any, curr:any) => {
  //   // If the current item is an array, recursively flatten it
  //   return acc.concat(Array.isArray(curr) ? this.flattenArray(curr) : curr);
  // }, []);

  let result:any = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If the current item is an array, recursively flatten it
      result = result.concat(this.flattenArray(arr[i]));
    } else {
      // If it's not an array, simply push the item
      result.push(arr[i]);
    }
  }

  return result;
}
// 21.•  Write a function which converts string input into an object. Example: ("a.b.c", "someValue");
// Output: {a: {b: {c: "someValue"}}}
convertStringToObject(path:any, value:any) {
  const keys:any = path.split('.');
  let result:any = {};

  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      result[keys[i]] = value;  // Set the value at the final key
    } else {
      result[keys[i]] = result[keys[i]] || {};  // Create a nested object if it doesn't exist
      result = result[keys[i]];  // Move deeper into the nested object
    }
  }

  return result;
}

}
