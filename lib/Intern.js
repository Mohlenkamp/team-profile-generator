const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '', role = '') {
        super(name, id, email, role);  //from Employee object
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        return {
            school: this.school
        };
    }
}


module.exports = Intern;