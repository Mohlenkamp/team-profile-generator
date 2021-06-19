// This is the utility file to generate the HTML for the team

function renderRoleIcon (data){
    // Each employee type has unique icon for his/her role 

    switch (data.role){
        case 'Manager': {
            return (`<span class="material-icons">
            event_seat
            </span>`); break;
        }
        case 'Engineer': {
            return (`<span class="material-icons">
            engineering
            </span>`); break;
        }
        case 'Intern': {
            return (`<span class="material-icons">
            school
            </span>`); break;
        }
        default : {console.log("Error in renderRoleIcon switch/case logic")}
    }
}

function renderUniqueSection(data) {
    // Each employee type has unique data, this function will parse that out
    // and make the correct HTML 

    switch (data.role){
        case 'Manager': {
            return (`<p>Office Number: <span>${data.officeNumber}</span></p>
                    <br>`); break;
        }
        case 'Engineer': {
                    return (`<p>GitHub: <span>${data.github}</span></p>
                    <br>`); break;
        }
        case 'Intern': {
            return (`<p>School: <span>${data.school}</span></p>
            <br>`); break;
        }
        default : {console.log("Error in renderUniqueSection switch/case logic")}
    }
}

function renderTeamCards(data) {
// Loop through each team member in the array
    let returnString = ''  // using this to create the inner section of the html file
    let element = ''
    let arrayLength = data.length
//    console.log(data)
    for (i=0;i<arrayLength;i++){  // not using foreach, because I want to limit it to 3 cards/row
        if((i%3 === 0)){
            //start new container for up to 3 cards
            returnString = returnString + `
            <div class="container">`
        }
        element = data[i]    
        returnString = returnString + `
        <div class="card">
            <header class="card-header">
                <p class="card-header-title is-centered">
                   ${renderRoleIcon(element)} <span>  </span>${element.role}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>Name: <span>${element.name}</span></p>
                    <br>
                    <p>ID: <span>${element.id}</span><p>
                    <br>
                    <p>Email: <span>${element.email}</span></p>
                    <br>
                    ${renderUniqueSection(element)}
                </div>
            </div>
            <footer class="card-footer">
                <a href="mailto:${element.email}" class="card-footer-item">Contact via Email</a>
            </footer>
        </div>                
    `    
    if (((i===(arrayLength-1)) || ((i+1)%3 === 0)) && (i > 0)){
        //close out the container div because we're at the end or there's 3 in the row
        // Also, this took me FOREVER to figure out that I needed to add +1 to i to get
        // the darn </div> to work right.... UGH!
        returnString = returnString + `</div>` 
    } 
};
    return returnString;
}

// Create a function to generate HTML file for team
const generateHTML = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- I am embedding the custom styles to make the deployment easier -->
        <style type="text/css" media="screen">
        .container {
            display: flex;
            flex-flow: row wrap;
            flex-basis: 60%;
        }
        .card {
            height: max-content;
            min-width: 30%;
            margin: 0 auto; 
            float: none; 
            margin-bottom: 10px;
        }
        .card-header {
            background-color: blue;
        }
        .card-header p{
            color:white;
        }
    </style>
    </head>
    
    <body>
        <section class="hero is-small is-danger is-fluid">
            <div class="hero-body has-text-centered">
                <p class="title">
                    My Team
                </p>
            </div>
        </section>
        <section class="section">

               ${renderTeamCards(data)}

        </section>
    </body>
    
    </html>
  `;
  }
  
  module.exports = generateHTML;