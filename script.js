console.log("js sourced");

var employees = [];
var totalSalary = 0;

//get employee information from Dom
var getEmployeeInfo = function() {


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

  displayEmployees();
}; //end getEmployeeInfo

var displayEmployees = function(){
totalSalary = 0;
  //post employees to Dom
  //clear employees
  document.getElementById('showInfo').innerHTML = "";
    //add employees
    for (var i = 0; i < employees.length; i++) {
      //add employee to Dom
      var allEmployees = "<p>" + "Employee Name: " + employees[i].fName + " " + employees[i].lName + "<br>" +
                    "ID: " + employees[i].id + "<br>" +
                    "Job Title: " + employees[i].jobTitle + "<br>" +
                    "Annual Salary: " + employees[i].annualSalary + "<br><br>" +
                    "<button onClick='removeEmployee(" + i + ")'>Remove Employee</button" + "</p>";

      document.getElementById('showInfo').innerHTML += allEmployees;



      document.getElementById('totalSalary').innerHTML = "";
      //compute total Salary
      totalSalary += employees[i].annualSalary;
      //convert to currency


      console.log(totalSalary);

      //add total Salary on Dom


    }
  totalSalary = totalSalary.toLocaleString('USD', {style: 'currency', currency: 'USD'});

  document.getElementById('totalSalary').innerHTML = totalSalary;
};


//remove single employee from the Dom with button
var removeEmployee = function(index){
  console.log('in removeEmployee');

  var removedEmployee = employees[index];

  employees.splice(index, 1);

  displayEmployees();

};//end removeEmployee
