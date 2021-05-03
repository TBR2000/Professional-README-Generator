// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
 switch(data.licenseResponse){
case 'MIT':
  badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  return (badge)
  break;
  case 'Apache':
    badge = 'https://img.shields.io/badge/License-Apache-blue.svg'
    return (badge)
    break;
  case 'Apache-2.0':
    badge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    return (badge)
    break;
  case 'MPL-2.0':
    badge = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    return (badge)
    break;
  case 'EPL-1.0':  
    badge = 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
  case 'BSD-2-Clause':
    badge = 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg'
    return (badge)
    break;
  case 'BSD-3-Clause':
    badge = 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg' 
    return (badge)
    break;
    default:
      badge = {} 
      return (badge)
 }};
 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(!data.licenseResponse){
    licenseUrl = {}
  }else{
    licenseUrl = 'https://opensource.org/licenses/' + data.licenseResponse
  }
 return(licenseUrl)
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

  ![${data.licenseResponse}](${renderLicenseBadge(data)})

## Description
${data.descript}

## Table of Contents

- [Installation Instrutions](#InstallationInstrutions)
- [Usage information](#usageinformation)
- [Contribution information](#contributioninformation)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)
- [Screenshots](#screenshots)
- [Links](#links)

## Installation Instructions
${data.install}

## Usage information
${data.usage}

## Contribution information
${data.contrib}

## Testing
${data.test}

## License
**${renderLicenseLink(data)}**

## Questions
My github username is: ${data.github} and the repository for this project is: ${data.repo}

If you have any questions please contact me at: ${data.email}

## Screenshots
Screenshot of the deployed project:
![screenshot](${data.images})


## Links 
Links to the deployed project and Github Repository
Repository: **${data.linkRepo}**
Deployed Project: **${data.linkDeploy}**
`;}

module.exports = generateMarkdown;
