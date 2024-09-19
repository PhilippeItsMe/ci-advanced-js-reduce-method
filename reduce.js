  
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

let totalExperience =teamMembers.reduce ((acc, curr) => acc + curr.yrsExperience, 0);
//curr design aussi l'occurence actuel et peut être précisée par un .key

console.log(totalExperience);


// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
      acc[key] = curr.yrsExperience;
    }
    else acc[key]+= curr.yrsExperience;
    return acc;
}, {} ) //initial value is an emply object has the output will be objects

console.log(experienceByProfession);

