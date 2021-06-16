const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);  //from Employee object
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