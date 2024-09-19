  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [1,2,3,4];
let sum = nums.reduce ((acc, curr) => acc + curr); //acc -> accumulator =, curr = current value
console.log(sum);

let sum2 = nums.reduce ((acc, curr) => acc + curr,210); 
//with an initial value of 20 (could be a string or any other item)
//always put a item to avoid bugs (tips)
console.log(sum2);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
