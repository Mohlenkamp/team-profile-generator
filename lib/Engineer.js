const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '', role='') {
        super(name, id, email, role);  //from Employee object
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub() {
        return {
            github: this.github
        };
    }
}


module.exports = Engineer;