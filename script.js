console.log("js sourced");

var employees = [];

//get employee information from Dom
var getEmployeeInfo = function() {

var totalSalary = 0;
//create newEmployee variable from Dom input
var newEmployee = {

  fName : document.getElementById("fNameIn").value,
  lName : document.getElementById("lNameIn").value,
  id : document.getElementById("idIn").value,
  jobTitle : document.getElementById("jobTitleIn").value,
  annualSalary : Number(document.getElementById("annualSalaryIn").value)
};

//clear all text input
document.getElementById("fNameIn").value = "";
document.getElementById("lNameIn").value = "";
document.getElementById("idIn").value = "";
document.getElementById("jobTitleIn").value = "";
document.getElementById("annualSalaryIn").value = "";

console.log(newEmployee);

//create new employees array and push each employee
employees.push(newEmployee);

console.log(employees);

//post employees to Dom
//clear employees
document.getElementById('showInfo').innerHTML = "";
//add employees
for (var i = 0; i < employees.length; i++) {
//add employee to Dom
var allEmployees = "<p>" + "Employee Name: " + employees[i].fName + " " + employees[i].lName + "<br>"
                  + "ID: " + employees[i].id + "<br>" +
                  "Job Title: " + employees[i].jobTitle + "<br>" +
                  "Annual Salary: " + employees[i].annualSalary + "<br>" + "</p>";
                  "<button onClick="

document.getElementById('showInfo').innerHTML += allEmployees;

//compute total Salary
totalSalary += employees[i].annualSalary;
//convert to currency
totalSalary = totalSalary.toLocaleString('USD', {style: 'currency', currency: 'USD'});

console.log(totalSalary);

//clear totalSalary on Dom
document.getElementById('totalSalary').innerHTML = '';

//add total Salary on Dom
document.getElementById('totalSalary').innerHTML = totalSalary

}

}; //end newEmployee
