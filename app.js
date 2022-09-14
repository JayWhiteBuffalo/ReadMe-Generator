const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/ReadMe-template');


//Array for badges
const badgeArr = [
    {
        name: 'Apache',
        License: 'Apache',
        version: 'Apache 2.0 License',
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
        url: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
        name:'Boost',
        License: 'Boost',
        version:'Boost Software License 1.0',
        badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
        url: 'https://www.boost.org/LICENSE_1_0.txt'
    },
    {
        name: 'BSD3',
        version: 'BSD 3-Clause License',
        badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
        url: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    {
        name: 'BSD2',
        version: 'BSD 2-Clause License',
        badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]',
        url: 'https://opensource.org/licenses/BSD-2-Clause'
    },
    {
        name: 'GNU',
        version:'GNU GPL vs3',
        badge:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
        url: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
        name:'MIT',
        version:'MIT License',
        badge:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
        url:'https://opensource.org/licenses/MIT'
    },
    {
        name: 'ISC',
        version: 'ISC License',
        badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
        url: 'https://opensource.org/licenses/ISC'
    },
    
]

const [Apache, Boost, BSD3, BSD2, GNU, MIT, ISC] = badgeArr;

//validate user input
const validateInput = (value) => {
    if (value != "") {
        return true;
    } else {
        return "Must provide an answer"
    }
};

const questions =
  //Array of questions for user to be returned
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of this Project?',
            validate: validateInput,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a detailed description of your Project',
            validate: validateInput,
        },
        {
            type: 'confirm',
            message: "Would you like to include a Table of Contents?",
            name: "Table of Contents",
            validate: validateInput
        },
        {
            typer: "input",
            message: "What does the user need to install to run this app?",
            name: "Installation",
            default : "No extra Installation is required"
        },
        {
            type: "input",
            message: "How is the app used? Please give a brief overview of instructions for this app",
            name: "Usage",
            validate: validateInput
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            name:"Contributing",
            validate: validateInput
        },
        {
            type:"input",
            message: "What is your Github username?",
            name: 'Github',
            validate: validateInput,
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email',
            validate: validateInput
        },

    ];

    //Seperate function for License and badges
    const askLicense = 
        [{
        type: "list",
        message: "What liscense will being used?",
        name: "License",
        choices: [
            Apache,
            Boost,
            BSD3,
            BSD2,
            GNU,
            MIT,
            ISC,
        ]
    }];
    
  //function to loop through array with return licensed input and check each object to see if is a match for data out put

 function licenseHandle (data){
    let license = badgeArr.filter(x => x.name === data.License)
    let badge = license.map(x => x.badge);
     console.log(badge);
 }




       



function runIt() {
    inquirer.prompt(askLicense)
    .then(data => {licenseHandle(data)});

};
    // .then(data => {const readMeMD = generateReadMe(data);
    // fs.writeFile('./readMe.md', readMeMD, err => {
    //     if (err) throw new Error(err);
    //     console.log('Read me created');
    // })});




runIt();

// const printReadMeData = (readMeDataArr) => {
//     console.log(readMeDataArr);
// };

//printReadMeData(readMeDataArgs);

