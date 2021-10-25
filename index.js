const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/readmeQuestions");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.log("Error when writing the file: " + error) : console.log("File created successfully!");
    });
}

// TODO: Create a function to initialize app
function init() {
    let readMeStr = "";
    inquirer.prompt(questions)
        .then((answers) => {
            console.log("GOing to handle answers...");
            readMeStr = generateMarkdown(answers);
            if (readMeStr.length > 0) writeToFile('ReadmeEx.md', readMeStr)
            else console.log("An error occured when generating the text for the Readme.");
        });
}

// Function call to initialize app
init();
