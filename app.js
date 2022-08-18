const inquirer = require('inquirer');
// const mysql = require('mysql2');
const { getDepartments, addDepartment } = require('./operations/department');
const { getRoles } = require('./operations/role');

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
        //once user selected this, should see a list of employee name to choose from, select a new role
        'update an employee role', 
        'exit'
      ]
    },
    {
      message: "What is the department name?",
      type: "input",
      name: "department_name",
      when: (ans) => ans.operaion === "add a department",
    },
    {
      message: "Which department?",
      type: 'list',
      choices: function(){
        
        return [
          {
            name: "Sales",
            value: 2
          },
          {
            name: "Finance",
            value: 3
          },
        ]
        
      },
      name: "department_role",
      when: (ans) => ans.operation === 'add a role',
    },
    {
      message: "What is the employee name?",
      type: "input",
      name: "employee_name",
      when: (ans) => ans.operaion === "add an employee",
    },
    
  ]).then(async (ans) => {
  
    switch(ans.operaion){
      
      case "view all departments":
        const departments = await getDepartments();
        console.table(departments);
        break;
        
        
      case "view all roles":
        const roles = await getRoles();
        console.table(roles);
        break;
          
      case "view all employees":
            
        break;
      case "add a department":
        const department = await addDepartment();
        console.table(department);
        break;
      
      case "add a role":
        const role = await addRole();
        console.table(role);
        break;

      case "add an employee":
        const employee = await addEmployee();
        console.table(employee);
        break;

      case "update an employee role":
        break;

      case "exit":
        process.exit(0);
    }

    await main();
  })

}

main();
