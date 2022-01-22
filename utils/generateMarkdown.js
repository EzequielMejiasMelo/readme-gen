// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License (N/A)'){
    return "";
  }

  let licenseName;
  switch(license){
    case 'MIT License':
      licenseName = 'MIT';
      break;
    case 'GNU AGPLv3':
      licenseName = 'AGPL_v3';
      break;
    case 'GNU GPLv3':
      licenseName = 'GPLv3';
      break;
    case 'Mozilla Public License 2.0':
      licenseName = 'MPL_2.0';
      break;
    case 'Apache License 2.0':
      licenseName = 'Apache_2.0';
      break;
    case 'The Unlicense':
      licenseName = 'Unlicense';
      break;
  }

  let link = renderLicenseLink(license);
  return `[![License: ${licenseName}](https://img.shields.io/badge/license-${licenseName}-blue.svg)](${link})`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License (N/A)"){
    return "";
  }

  let licenseLink;
  switch(license){
    case 'MIT License':
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case 'GNU AGPLv3':
      licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU GPLv3':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Apache License 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'The Unlicense':
      licenseLink = 'http://unlicense.org/';
      break;
  }

  return licenseLink;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License (N/A)"){
    return "";
  }

  let section = 
  `
  
  ## License
  
  [${license}](${renderLicenseLink(license)})`

  return section; 
}

// Function that returns the Table of Contents section
// return a string if none of the sections are used
function renderTableOfContents(install, usage, guidelines, tests, license){
  let tableOfContents = `## Table of Contents`;
  if (install !== "") {
    tableOfContents += `
  * [Installation](#installation)`
  };
  if (usage !== "") {
    tableOfContents += `
  * [Usage](#usage)`
  };
  if (guidelines !== "") {
    tableOfContents += `
  * [Guidelines](#guidelines)`
  };
  if (tests !== "") {
    tableOfContents += `
  * [Tests](#tests)`
  };
  if (license !== "No License (N/A)"){
    tableOfContents += `
  * [License](#license)`
  };
  return tableOfContents === `## Table of Contents`? "" : tableOfContents;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
