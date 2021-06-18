



const managerQuestions = () => {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'managerName',
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
            name: 'managerEmail',
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
            name: 'managerOffice',
            message: 'Manager: What is your office number? (Required)',
            validate: mgrOffice => {
              if (mgrOffice) {
                return true;
              } else {
                console.log('You need to enter your office number!');
                return false;
              }
            }
        }
    )
}

const addEngineer = teamData => {
    console.log('Add an engineer team member')
    return inquirer
      .prompt([
    {
        type: 'input',
        name: 'engineerName',
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
        name: 'engineerEmail',
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
        name: 'engineerGithub',
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

const addIntern = teamData => {
    console.log('Add an intern team member')
    return inquirer
      .prompt([
          {
            type: 'input',
            name: 'internName',
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
            name: 'internEmail',
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
            name: 'intrnSchool',
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

const promptTeam = teamData => {
    console.log('Add a team member')
  
    // If there's no 'members' array property, create one and add manager
    if (!teamData.members) {
      teamData.members = [];
      console.log(teamData)
      teamData.members.push(teamData)
    }
    return inquirer
      .prompt([
        {       
            type: 'checkbox',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['Add an Engineer to the team', 'Add an Intern to the team', "I'm finished adding to the team"]
        }])
        .then(teamData => {
            switch (teamData.menu){
                case 'Add an Engineer to the team': {addEngineer(teamData); break;}
                case 'Add an Intern to the team': {addIntern(teamData); break;} 
                case "I'm finished adding to the team" : {console.log('team completed'); break;}
                default : console.log ('Error in switch/case logic');
            }
            teamData.members.push(teamData);
            if (!teamData.menu === "I'm finished adding to the team") {
              return promptTeam(teamData);
            } else {
              return teamData;
            }
          })
}

const generateHTML = (teamData) => {
   return console.log(teamData)
   //todo: html
}

// Staring here
managerQuestions()
    .then (promptTeam)
    .then (teamData => {
        return generateHTML(teamData)})
