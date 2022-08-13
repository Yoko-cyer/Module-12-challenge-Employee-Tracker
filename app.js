const inquirer = require('inquirer');
// const mysql = require('mysql2');
const { getDepartments, addDepartment } = require('./operations/department');

function main(){

  return inquirer.prompt([
    {
      message: "What do you want to do?",
      type: 'list',
      name: 'operaion',
      choices: [
        'view all departments',
        'view all roles',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role', 
        //once user selected this, should see a list of employee name to choose from, select a new role
        'exit'
      ]
    },
    {
      message: "What is the department name?",
      type: "input",
      name: "department_name",
      when: (ans) => ans.operaion === "add department",
    }

  ]).then(async (ans) => {
  
    switch(ans.operaion){
      
      
      case "view all departments":
        const departments = await getDepartments();
        console.table(departments);
        break;
        
      case "add a department":
         const department = await addDepartment();
         console.table(department);
         break;

      case "view all roles":
  
        break;
      case "exit":
        process.exit(0);
    }

    await main();
  })

}

main();

 
// add a department, add a role, 
// add an employee, and update an employee role
