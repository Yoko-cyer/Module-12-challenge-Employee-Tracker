const { connect } = require("../db/connection");

async function addEmployee() {

 
}

async function getEmployees() {

  // use join statement to grab role and manager name
  // employee data, including employee ids, first names, last names, job titles, departments, salaries, 
  // and managers that the employees report to
  const db = await connect();


}


module.exports = {

  addEmployee,
  getEmployees,
}