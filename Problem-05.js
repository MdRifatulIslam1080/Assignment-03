/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

var name = student.name;
var roll = student.roll;
var department = student.department;
var email = name + roll + "." + department + "@ph.ac.bd";
console.log(email);
