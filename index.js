// Includes packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {type:'input', message: 'What is the title of your project?', name: 'title'},
    {type:'input', message: "What is your GitHub username?", name: "username"},
    {type:'input', message: "What is your email address?", name: "email"},
    {type:'input', message: 'Write a description of your project.', name: 'description'},
    {type:'input', message: 'Enter the installation instructions, if any.', name: 'install'},
    {type:'input', message: 'Enter the usage steps and examples, if any.', name: 'usage'},
    {type:'input', message: 'Enter the guildlines for contributions from other developers, if any.', name: 'guidelines'},
    {type:'input', message: 'Provide the tests written for your application, if any.', name: 'tests'},
    {type:'list', choices: ['No License (N/A)', 'MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'The Unlicense', 'Mozilla Public License 2.0', 'Apache License 2.0'], name: 'license'}
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }

        console.log("Complete! Your README file has been created!");
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        const markdownText = generateMarkdown(response);
        writeToFile('README.md', markdownText);
    });
}

// Function call to initialize app
init();
