var experience = 30;
var startingSalary = 45000;
//write your code here

var currentSalary = startingSalary;
for (var i = 0; i < experience; i++) {
  currentSalary = currentSalary + currentSalary * (5 / 100);
}
console.log(currentSalary.toFixed(2));
