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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
