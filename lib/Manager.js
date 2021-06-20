const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name = '', id = '', email = '', role= '', officeNumber = '') {
    super(name, id, email, role);  //from Employee object
    this.officeNumber = officeNumber;
    this.role = 'Manager';

  }
}


module.exports = Manager;