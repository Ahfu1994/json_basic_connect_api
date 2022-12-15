const arr1 = ['FIRST','Chiradet','Khositanon',100000,false];
const arr2 = ['SECOND',322,true,'hello','Khositanon',400000,false];

const arr3 = arr1.concat(arr1,arr2);
const arr4 = arr1;
arr2.push(arr1);
console.log(arr2);
console.log(arr3);


Array.prototype.push.apply(arr1,arr2);
console.log(arr1);

arr2.push("New item");
arr1.push('Arr 1 New');

// delete arr1[12];
// delete arr2[7];

// arr1.length = 0;
arr1.splice(12,1,'Removed','Second'); // replaces 1 element at index 12
arr2.splice(3,3);// remove 3 element at index 3 to 6
console.log(arr1);
console.log(arr2);
// console.log(arr3);
// console.log(arr4);


