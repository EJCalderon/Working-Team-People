const fs = require('fs');
const inquirer = require('inquirer');

//Links to corresponding js files
const employee = require('');
const engineer = require('');
const intern = require('');
const manager = require('');

const render = require('');

const employee = [];

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