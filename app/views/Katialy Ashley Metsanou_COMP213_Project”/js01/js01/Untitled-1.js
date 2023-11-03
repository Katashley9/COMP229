//accessing elements
console.log(fruits[0]);
console.log(fruits[2]);
let n= fruits.length;
console.log(fruits[n-1]);

//notifying array elements
console.log(fruits[1]);
fruits[1]="mango";
console.log(fruits[1]);
console.log(fruits);

//Adding a new element at the end
fruits.push("banana");
console.log(fruits);

//Removing element
fruits.pop();
//fruits.pop();
console.log(fruits);

//get the location of an element 
console.log(fruits.indexof("mango"));

//removing element based on the exact position 
fruits.splice(1,1);
console.log(fruits);

//how t create an empty array
let datavalues=[];
console.log(datavalues);
datavalues[0]="Hello";
datavalues[2]="Yza";
console.log(datavalues);
console.log(datavalues[1]);

//create variable in Various ways
let Days=["Mon","Tue","Wed"]
console.log(Days);

let myDays=new Array("Thur", "Fri", "Sat");
console.log(myDays);

let DayNames=new Array(3)
console.log(DayNames);
console.log(DayNames[0]);

//multi dimensional arrays
let marray=[
    [4,2,1,2],
    [1,3,18,6],
    [3,7,3,4]
];
console.log(marray);
console.log(marray.length);
console.log(marray[0]);
//console.log(marray[marray.length-1]);
console.log(marray[0][0]);
console.log(marray[0].length);




