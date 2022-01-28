# readme-gen
  [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
  
  A CLI application created to generate a README file based on user input. This application implements the `Inquirer` module from `Node.js`
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
    
## Installation
    
First, you have to use `git clone` to create a local copy of the repository on your file system. Run `npm install` to install all of the necessary dependencies identified in `package.json`.

To start the application, run `node index.js` in the command line. Answer the prompts by providing the team information so the profiles can be created. Once answered, your HTML file will be named `README.md` and will be located in the repository.
    
## Usage

![A user entering info into the command line and a markdown file is generated.](./readme-demo.gif)

When you run `node index.js`, the application uses `inquirer` package to prompt you in the command line. One these are entered, the reponses are passed to he application to generate the markdown. The generation for the Table of Contents also takes into account your reponses and will not created sections that you did not provide an answer for.

Lastly, the `fs` module will then write the generated markdown to your project's `README.md` file. See my example name `GeneratedREADME.md` located in the repository.
    
  
  ## License
  
  [MIT License](https://opensource.org/licenses/MIT)
  
  ## Support
  
  Contact me if you have any questions
  - GitHub: [@EzequielMejiasMelo](https://github.com/EzequielMejiasMelo)
  - Email: [ezequiel.mejiasmelo@gmail.com](ezequiel.mejiasmelo@gmail.com)