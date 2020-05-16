const fs = require("fs");
const util = require("util");
const path = require('path')
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// const writeFileAsync = util.promisify(fs.writeFile);

// function promptUser() {
//   return inquirer.prompt([
    const questions = [
    {
        type: "input",
        name: "name",
        message:" Whats is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message:" Whats is your email?"
    },
    {
        type: "input",
        name: "url",
        message:" Whats is the URL to your project?"
    },
    {
        type: "input",
        name: "project",
        message:" Whats is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message:" Please write a short description of your project"
    },
    {
        type: "checkbox",
        name: "license",
        message:" Please write a short description of your project",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "None",
        ]
    },
    {
        type: "input",
        name: "commands",
        message:" What commands should be run to install dependencies?"
    },
    {
        type: "input",
        name: "tests",
        message:" What command needs to be run for testing?"
    },
    {
        type: "input",
        name: "repo",
        message:" What does the user nned to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message:" What does the user nned to know about contributing to the repo?"
    },
];

function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    //path.join joins current dir by using process.cwd() and the name of your file stored in fileName variable
    fs.writeFile(path.join(process.cwd(), fileName), data, err=> {
        if (err) throw err;
        console.log("Saved")
    });
};

function init() {
    inquirer.prompt(questions).then(function(data){
        //console.log(data);
        writeToFile("ReadMe.MD", generateMarkdown(data))
    })
}

init();
