// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Give a brief description of your project',
    name: 'descript',
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
      choices: ['MIT', 'Apache', 'Apache-2.0', 'MPL-2.0', 'EPL-1.0','BSD-2-Clause','BSD-3-Clause'],
    },
  {
      type: 'input',
      message: 'What is your github?',
      name: 'github',
    },
  {
      type: 'input',
      message: 'What is the name of your repository?',
      name: 'repo',
    },
  {
      type: 'input',
      message: 'What email should questions be directed to?',
      name: 'email',
    },

  {
      type: 'input',
      message: 'Provide link to a screenshot of your project',
      name: 'images',
    },

  {
      type: 'input',
      message: 'What is the link to your Repo?',
      name: 'linkRepo',
    }, 
  {
      type: 'input',
      message: 'What is the link to your deployed project?',
      name: 'linkDeploy',
    }, 
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.error(err) : console.log('README created!'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then((data) => {
        writeToFile('./readme/README.md', generateMarkdown(data));
  });
}
// Function call to initialize app
init()
