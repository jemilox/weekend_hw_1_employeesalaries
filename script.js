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
  annualSalary : document.getElementById("annualSalaryIn").value
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

var allEmployees = "Employee Name: " + employees[i].fName + " " + employees[i].lName + "<br>"
                  + "ID: " + employees[i].id + "<br>" +
                  "Job Title: " + employees[i].jobTitle + "<br>" +
                  "Annual Salary: " + employees[i].annualSalary +
                  "<button onClick="

document.getElementById('showInfo').innerHTML += allEmployees;


totalSalary += employees[i].annualSalary;
console.log(totalSalary);
}

}; //end newEmployee
