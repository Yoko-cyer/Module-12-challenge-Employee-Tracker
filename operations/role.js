const { connect } = require("../db/connection");

async function addRole(name) {
  const db = await connect();
  await db.query('INSERT INTO `employees_db`.`employees` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES (?);', name)

 
}
async function getRoles() {
  const db = await connect();
  const [roles] = db.query('SELECT * FROM employees_db.roles;');

  return roles; 
}


module.exports = {

  addRole,
  getRoles,
}