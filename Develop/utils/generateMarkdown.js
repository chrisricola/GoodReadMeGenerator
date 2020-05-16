function generateMarkdown(data) {
  console.log(data);
  //write anything you want in below template literals!
  return `

# myProject


## Description


## Table of Contents


* [Installation] (#installation)

*

*

*

*

*

*[Tests] (#test)

* [Contribute & Repo] (#contribute & repo)

## Installation 


## Usage 

##License 

## Contributing

## Test




## ${data.name}
# ${data.email}
# ${data.license} this is the license
`;
}

module.exports = generateMarkdown;
