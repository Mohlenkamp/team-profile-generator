const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email);  //from Employee object
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