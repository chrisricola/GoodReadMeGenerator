function generateMarkdown(data) {
  console.log(data);
  //write anything you want in below template literals!
  return `

# ${data.project}

     ${data.email}


  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

  ${data.description}


## Table of Contents

* GitHub Username

* Project URL

* Installation

* License

* Contribute

* Repo Info

* Tests


## GitHub Username

## ${data.name}


## Project URl

  ${data.url}


## Installation 

  ${data.commands}


## License 

This project is licensed under the ${data.license}


## Contributing

 ${data.contribute}


## Repo Information

 ${data.repo}


## Test

To run test, run the following command:
 ${data.tests}



`;
}

module.exports = generateMarkdown;
