// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return ' ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT Link](https://opensource.org/license/mit/)';
  } else if (license === 'BSD') {
    return '[BSD Link](https://opensource.org/license/bsd-3-clause/)';
  } else if (license === 'GNU') {
    return '[GNU Link](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string {
function renderLicenseSection(license) {

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
- ${data.description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

- ${data.install}

## Usage


-${data.usage}

## License


- ${renderLicenseLink(data.license)}
- ${renderLicenseSection(data.license)}


## Credits

- ${data.credits}
-  GitHub: [${data.github}](https://github.com/${data.github})



## Tests

- ${data.tests}



`;
}


module.exports = generateMarkdown;
