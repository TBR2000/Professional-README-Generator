// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  if(!data.licenseResponse){
    let bagde = {}
  }else{
    let badge = 'https://img.shields.io/github/license/' + data.github + '/' + data.repo + '?style=plastic'
  }
  return (badge)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(!data.licenseResponse){
    let licenseUrl = {}
  }else{
    let licenseUrl = 'https://opensource.org/licenses/' + data.licenseResponse
  }
 return(licenseUrl)
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(licenseResponse)}

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

## Installation Instrutions
${data.install}

## Usage information
${data.usage}

## Contribution information
${data.contrib}

## Testing
${data.test}

## License
${renderLicenseLink(licenseResponse)}

## Questions
This project is located on my github: ${data.github}, In the repository ${data.repo}

If you have any questions please contact me at: ${data.email}

##Screenshots
Screenshots of the deployed project:
${data.images}

##Links 
Links to the deployed project and Github Respository:
${data.links}
`;}

module.exports = generateMarkdown;
