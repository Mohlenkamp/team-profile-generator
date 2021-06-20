// John Mohlenkamp
// Team Generator - Assignment 10
// June 20, 2021

// Imports

const inquirer = require('inquirer'); //Inquirer
const fs = require('fs')  // File system
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const generateHTML = require('./lib/generateHTML.js'); // Utility file

// Functions

const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true
      });
    });
  });
};

const addTeamMember = (role, data, team) =>{
    // This function will take the inquirer data and turn 
    // it into the proper employee object, then store it
    // into the team array.

 //   console.log("addTeamMember: " + role)
 //   console.log(data) 
    switch (role){
        case 'Manager':{
            let employee = new Manager(data.employeeName, data.employeeID, data.employeeEmail, role, data.employeeOffice);
           // console.log (employee)
            team.push(employee)
            break;
        }
        case 'Engineer':{
            let employee = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.employeeGithub, role);
           // console.log (employee)
            team.push(employee)
            break;
        }
        case 'Intern': {
            let employee = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.employeeSchool, role);
          //  console.log (employee)
            team.push(employee)
            break;
        }
        default: console.log ("Error in addTeamMember switch/case logic")
    }
    return true
}

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Manager: What is your name? (Required)',
            validate: mgrName => {
              if (mgrName) {
                return true;
              } else {
                console.log('You need to enter your name!');
                return false;
              }
            }
        },
          {
            type: 'input',
            name: 'employeeID',
            message: 'Manager: What is your employee ID? (Required)',
            validate: mgrId => {
              if (mgrId) {
                return true;
              } else {
                console.log('You need to enter your employee id!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'employeeEmail',
            message: 'Manager: What is your email address? (Required)',
 // Only for testing            default: 'mail@mail.com',
            validate: mgrEmail => { //Forcing email to be valid because of the required mailto: link
              const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (mgrEmail.match(re)) {
                return true;
              } else {
                console.log('You need to enter a valid email address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'employeeOffice',
            message: 'Manager: What is your office number? (Required)',
            validate: mgrOffice => {
              if (mgrOffice) {
                return true;
              } else {
                console.log('You need to enter your office number!');
                return false;
              }
            } 
        }]      
    ) 
}

const addEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'employeeName',
        message: 'Engineer: What is the name of your engineer? (Required)',
        validate: engrName => {
          if (engrName) {
            return true;
          } else {
            console.log('You need to enter the name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeID',
        message: 'Engineer: What is your employee ID? (Required)',
        validate: engrId => {
          if (engrId) {             
            return true;
          } else {
            console.log('You need to enter your employee id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: 'Engineer: What is the email address of your engineer ? (Required)',
// Only for testing        default: 'mail@mail.com',
        validate: engrEmail => {//Forcing email to be valid because of the required mailto: link
          //Forcing email to be valid because of the required mailto: link
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (engrEmail.match(re)) {
            return true;
          } else {
            console.log('You need to enter a valid email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeGithub',
        message: 'Engineer: What is the Github username of your engineer? (Required)',
        validate: engrGit => {
          if (engrGit) {
            return true;
          } else {
            console.log('You need to enter the Github user name!');
            return false;
          }
        }
    }
    ])
}

const addIntern = team => {
    //console.log('Add an intern team member')

    return inquirer
      .prompt([
          {
            type: 'input',
            name: 'employeeName',
            message: 'Intern: What is the name of your intern? (Required)',
            validate: intrnName => {
              if (intrnName) {
                return true;
              } else {
                console.log('You need to enter the name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'employeeID',
            message: 'Intern: What is your employee ID? (Required)',
            validate: intrnId => {
              if (intrnId) {             
                return true;
              } else {
                console.log('You need to enter your employee id!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'employeeEmail',
            message: 'Intern: What is the email address of your intern? (Required)',
 // Only for testing           default: 'mail@mail.com',
            validate: intrnEmail => {
              const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (intrnEmail.match(re)) {
                return true;
              } else {
                console.log('You need to enter a valid email address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'employeeSchool',
            message: 'Intern: What school does your intern go to? (Required)',
            validate: intrSchool => {
              if (intrSchool) {
                return true;
              } else {
                console.log('You need to enter the school for your intern!');
                return false;
              }
            }
        }
        ])
}

const promptTeam = team => {
   // console.log('Add a team member')
    return inquirer.prompt([
        {       
            type: 'rawlist',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['Add an Engineer to the team', 'Add an Intern to the team', "I'm finished adding to the team"]
        }])
        .then(menu => {
         //   console.log(menu.choice)
            switch (menu.choice){
                case 'Add an Engineer to the team': {
                    addEngineer()
                    .then (function (data){
                        addTeamMember('Engineer', data, team)
                        promptTeam(team)
                        }); 
                        break;}
                case 'Add an Intern to the team': {
                    addIntern()
                    .then (function (data){
                        addTeamMember('Intern', data, team)
                        promptTeam(team)
                        }); 
                        break;}
                case "I'm finished adding to the team" : {
                    console.log("Generating HTML file")
                    writeToFile(generateHTML(team))
                    break;}
                default : console.log ('Error in promptTeam switch/case logic');
            }
          })
          .catch(err => {
            console.log(err);
          });
}

// Main Program

let team = []
managerQuestions()
    .then (function (data){
        addTeamMember('Manager',data,team)
        promptTeam(team)
        })
    .catch(err => {
      console.log(err);
    });

