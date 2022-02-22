const fs = require('fs');
const inquirer = require('inquirer');

//Links to corresponding js files
const employee = require('lib/employee');
const engineer = require('lib/engineer');
const intern = require('lib/intern');
const manager = require('lib/manager');
const Engineer = require('./lib/engineer');

const teamMember = [];

function createNewEmployee() {
    inquirer.prompt([
        {
        type: "list",
        name: "role",
        message: "Who are you adding to your team?",
        choices: ["Manager", "Engineer", "Intern", "NA"],
        },
    ]).then(val => {
        if (role === "Manager") {
            addManager();
        }if (role === "Engineer"){
            addEngineer();
        }if (role === "Intern"){
            addIntern();
        }if (role === "NA"){
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
        let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        employee.push(engineer);
        createNewEmployee();     
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
        let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        employee.push(intern);
        createNewEmployee();     
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
        let intern = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerSchool)
        employee.push(manager);
        createNewEmployee();     
    });
}