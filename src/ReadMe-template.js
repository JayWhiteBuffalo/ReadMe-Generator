


//get user license string from inquire prompt
// take userString to rference corresponding license arr obj thru deconstruc arr
//usrString.badge to place corrct badge






module.exports = (templateData, answerobj) => {

    let {name, icon} = templateData;
    let {...answers} = answerobj;
    return `
    ${icon}
    # ${answers.title}
    https://github.com/${answers.Github}/${answers.title}
    # Description
    ${answers.description}
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Questions](#questions)
    # Installation
    The following necessary dependencies must be installed to run the application
    # Usage
    In order to use this app, ${answers.Usage}
    # License
    This project is licensed under the ${name} license.
    # Contributing
    Contributors: ${answers.Contributing}
    # Questions
    If you have any questions, contact ${answers.Email}
    `
}

