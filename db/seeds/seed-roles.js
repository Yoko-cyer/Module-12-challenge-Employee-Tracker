const {faker} = require('@faker-js/faker');
const { addRole } = require('../../operations/role');

async function seedRoles(num = 10){

  for (let index = 0; index < num; index++) {
    await addRole(faker.name.jobType ())
    
  }
}

module.exports = { seedRoles };