// function checkEvenOdd(num: number): string {
//  if (num % 2 === 0) {
//  return "Even";
//  }
//  return "Odd";
// }
// console.log(checkEvenOdd(7));
function removeDuplicates(arr: number[]): number[] {
 let result: number[] = [];
 for (let num of arr) {
 if (!result.includes(num)) {
 result.push(num);
 }
 }
 return result;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));