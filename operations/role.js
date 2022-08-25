const { connect } = require("../db/connection");

async function addRole(title, salary, department_id) {
  const db = await connect();
  const rolesInputs = [title, salary, department_id];
  await db.query('INSERT INTO `employees_db`.`roles` (`title`, `salary`, `department_id`) VALUES (?,?,?)',
  rolesInputs);
}

async function getRoles() {
  const db = await connect();
  const [roles] = await db.query('SELECT * FROM roles;');

  // console.log("Roles: ", roles)

  return roles; 
}


module.exports = {

  addRole,
  getRoles,
}