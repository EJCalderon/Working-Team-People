const fs = require('fs');
const inquirer = require('inquirer');

//Links to corresponding js files
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');


const newTeamMember = [];

function createNewTeammember() {
    inquirer.prompt([
        {
        type: "list",
        name: "role",
        message: "Who are you adding to your team?",
        choices: ["Manager", "Engineer", "Intern", "NA"],
        },
    ]).then(name => {
        if (name.role === "Manager") {
            addManager();
        }if (name.role === "Engineer"){
            addEngineer();
        }if (name.role === "Intern"){
            addIntern();
        }if (name.role === "NA"){
            generateHTML();
        };
    });
}


function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's' name?"
        },
        {
            type:"input",
            name: "engineerId", 
            message: "What is the engineer's' id #?",
        },
        {
            type:"input",
            name: "engineerEmail", 
            message: "What is the engineer's' email?",      
        },
        {
            type:"input",
            name: "engineerGithub", 
            message: "What is the engineer's' github?",
        },

    ]).then(function(answer){
        let engineer = new engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
        employee.push(engineer);
        createNewTeammember();     
    });
}


function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's' name?"
        },
        {
            type:"input",
            name: "engineerId", 
            message: "What is the engineer's' id #?",
        },
        {
            type:"input",
            name: "internEmail", 
            message: "What is the intern's' email?",      
        },
        {
            type:"input",
            name: "internSchool", 
            message: "What is the intern's' school?",
        },

    ]).then(function(answer){
        let intern = new intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool)
        employee.push(intern);
        createNewTeammember();     
    });
}

function addManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's' name?"
        },
        {
            type:"input",
            name: "managerId", 
            message: "What is the manager's' id #?",
        },
        {
            type:"input",
            name: "managerEmail", 
            message: "What is the manager's' email?",      
        },
        {
            type:"input",
            name: "managerOfficeNumber", 
            message: "What is the manager's' office number?",
        },

    ]).then(function(answer){
        let manager = this.Manager (answer.managerName, answer.managerId, answer.managerEmail, answer.officeNumber)
        employee.push(manager);
        createNewTeammember();     
    });
}

function generateHTML() {
    fs.writeFile(fileName, data, function (err){
        if (err) {
            throw err;
        }
    });
};
createNewTeammember();