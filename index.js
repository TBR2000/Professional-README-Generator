// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
        type: 'input',
        message: 'What license is your project using',
        name: 'badgeResponse',
      },
    {
        type: 'input',
        message: 'Explain which license the application is covered under',
        name: 'license',
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
  ])

  
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
`), (err) =>
  err ? console.error(err) : console.log('README created!')
  
);


// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init()
