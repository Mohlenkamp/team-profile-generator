class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'  //default assignment
    }
  
    getName() {
      if (this.name.length === 0) {
        return false;
      }
      return this.name;
    }

    getId() {
        if (this.id.length === 0) {
          return false;
        }
        return this.id;
      }
  
    getEmail() {
        if (this.email.length === 0) {
          return false;
        }
        return this.email;
      }

    getRole() {
        return this.role;
    }
  }
  
  module.exports = Employee;