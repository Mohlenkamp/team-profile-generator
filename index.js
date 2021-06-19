const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

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
            validate: mgrEmail => {
              if (mgrEmail) {
                return true;
              } else {
                console.log('You need to enter your email address!');
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
        validate: engrEmail => {
          if (engrEmail) {
            return true;
          } else {
            console.log('You need to enter the email address!');
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
            validate: intrnEmail => {
              if (intrnEmail) {
                return true;
              } else {
                console.log('You need to enter your email address!');
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
                   // console.log(team)
                    generateHTML(team)
                    break;}
                default : console.log ('Error in promptTeam switch/case logic');
            }
          })
}

const generateHTML = (teamData) => {
    {console.log('Need to generate HTML with the data');
   console.log(teamData)}
   //todo: html
}

// Staring here
let team = []
managerQuestions()
    .then (function (data){
        addTeamMember('Manager',data,team)
        promptTeam(team)
        })

