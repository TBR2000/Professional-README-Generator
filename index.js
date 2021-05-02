// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
let licensing = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Give a brief description of your project',
      name: 'Descript',
    },
    {
      type: 'input',
      message: 'provide install instrutions for your project',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Provide usage instrutions for your project',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide details on contributing to your project',
        name: 'contrib',
      },
    {
        type: 'input',
        message: 'Provide test instrutions for your project',
        name: 'test',
      },
    {
        type: 'list',
        message: 'What license is your project using',
        name: 'licenseResponse',
        choices: ['MIT', 'Apache', 'Apache 2', 'MIT/Apache-2.0', 'lgpl_2_1', 'GPL', 'GPL(>=2)', 'BSD'],
      },
    {
        type: 'input',
        message: 'What is your github?',
        name: 'github',
      },
    {
        type: 'input',
        message: 'What email should questions be directed to?',
        name: 'email',
      },

    {
        type: 'input',
        message: 'Provide links to screenshots of your project',
        name: 'images',
      },

    {
        type: 'input',
        message: 'What are the links to your deployed project and Repo',
        name: 'links',
      }, 
  ])

.then((response) => licensing(licenseResponse)
    //render license and badge here
  

  .then((response) =>
  fs.writeFile('README.md',`
# ${title}

${badge}

## Description
${descript}

## Table of Contents

- [Installation Instrutions](#InstallationInstrutions)
- [Usage information](#usageinformation)
- [Contribution information](#contributioninformation)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)
- [Screenshots](#screenshots)
- [Links](#links)

## Installation Instrutions
${install}

## Usage information
${usage}

## Contribution information
${contrib}

## Testing
${test}

## License
${license}

## Questions
This project is located on my github: ${github}

If you have any questions please contact me at: ${email}

##Screenshots
Screenshots of the deployed project:
${images}

##Links 
Links to the deployed project and Github Respository:
${links}
`), (err) =>
  err ? console.error(err) : console.log('README created!')
  
));


// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init()
