const { connect } = require("../db/connection");

async function addEmployee(name) {
  const db = await connect();
  await db.query('INSERT INTO `employees_db`.`employees` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES (?);', name)
 
}

async function getEmployees() {

  const db = await connect();
  const [employees] = await db.query("SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS departments, roles.salary, CONCAT(managers.first_name, ' ', managers.last_name) AS managers FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees managers on managers.id = employees.manager_id;"
  );

  console.log("Roles: ", employees)

  return employees;

  // use join statement to grab roles and manager name
  // employees data, including employees ids, first names, last names, job titles, departments, salaries, 
  // and managers that the employees report to



}


module.exports = {

  addEmployee,
  getEmployees,
}