const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/ReadMe-template');

const promptUser = () => {
  //Array of questions for user to be returned
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of this Project?',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }else{
                    console.log('You must enter a name for this ReadMe.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a detailed description of your Project',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }else{
                    console.log('You must enter a description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Table of Contents.",
            name: "Table of Contents"
        },
        {
            typer: "input",
            message: "What does the user need to install to run this app?",
            name: "Installation"
        },
        {
            type: "input",
            message: "How is the app used? Please give a brief overview of instructions for this app",
            name: "Usage"
        },
        //may change this to options
        {
            type: "input",
            message: "What liscense(s) are being used?",
            name: "License"
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            name:"Contributing"
        },
        {
            type:"input",
            message: "Please give contact info for questions and inquireries",
            name:"Questions"
        },
        {
            type:"input",
            message: "What is your Github username?",
            name: 'Github'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email'
        }

    ])
}

//Start user prompt
promptUser().then(data => { const readMeMD = generateReadMe(data);
fs.writeFile('./readMe.md', readMeMD, err => {
    if (err) throw new Error(err);
    console.log('Read me created');
})});
// function to write ReadMe file


// const printReadMeData = (readMeDataArr) => {
//     console.log(readMeDataArr);
// };

//printReadMeData(readMeDataArgs);

