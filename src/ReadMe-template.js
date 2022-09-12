module.exports = templateData => {
    const {...data} = templateData;
    return `
    # ${data.title}
    https://github.com/${data.Github}/${data.Title}
    # Description
    ${data.Description}
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
    #License
    This project is licensed under the ${data.License} license.
    ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
    # Contributing
    Contributors: ${data.Contributing}
    # Questions
    If you have any questions, contact ${data.Email}
    `
}