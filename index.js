// files needed to run the code
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateSite = require('./src/template.js');
const inquirer = require('inquirer');

teamArray = [];

// funtion to start building team using inquirer
const startPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true; 
                } else {
                console.log('Please enter your name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message:'Enter your employee ID. (Required)',
            validate: employeeId => {
                if (employeeId){
                    return true; 
                } else {
                console.log('Please enter your employee ID!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message:'Enter your email. (Required)',
            validate: email => {
                if (email){
                    return true; 
                } else {
                console.log('Please enter your email!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message:'Enter your office number. (Required)',
            validate: officeNumber => {
                if (officeNumber){
                    return true; 
                } else {
                console.log('Please enter your office number!');
                return false;
              }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamArray.push(manager);
        promptNext();
    })
;}

// Inquirer prompt to pick which employee to add next- each choice call the function associated
const promptNext = () => {
    return inquire.prompt([
        {
            type: 'list',
            name: 'menu',
            message: "Please select which employee you would like to add next:",
            choices: ['Add Engineer', "Add Intern", 'Finish building team.']
        }]). then(userChoice => {
            switch (userChoice.menu) {
                case 'Add Engineer':
                    promptEngineer();
                    break;
                case 'Add Intern':
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log('Add a New Engineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is the name of engineer? (Required)',
            validate: engineerName=> {
                if (engineerName){
                    return true; 
                } else {
                console.log('Please enter the name of engineer!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message:'What is the engineer employee id? (Required)',
            validate: employeeId=> {
                if (employeeId){
                    return true; 
                } else {
                console.log('Please enter the engineer employee Id!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message:'What is the engineer email address? (Required)',
            validate: email => {
                if (email){
                    return true; 
                } else {
                console.log('Please enter the engineer email address!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message:'What is the engineer GitHub username? (Required)',
            validate: githubUsername=> {
                if (githubUsername){
                    return true; 
                } else {
                console.log('Please enter the engineer email address!');
                return false;
              }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamArray.push(engineer);
        promptNext();
    })
};


