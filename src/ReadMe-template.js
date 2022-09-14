


//get user license string from inquire prompt
// take userString to rference corresponding license arr obj thru deconstruc arr
//usrString.badge to place corrct badge






module.exports = templateData => {

    let {...data} = templateData;
    return `
    # ${data.title}
    https://github.com/${data.Github}/${data.title}
    # Description
    ${data.description}
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Questions](#questions)
    # Installation
    The following necessary dependencies must be installed to run the application
    # Usage
    In order to use this app, ${data.Usage}
    # License
    This project is licensed under the ${data.License} license.
    
    # Contributing
    Contributors: ${data.Contributing}
    # Questions
    If you have any questions, contact ${data.Email}
    `
}

