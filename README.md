# readme-gen
  [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
  
  A 9-5 day planner implemented using jQuery and Moment.js. Based on the current hour, rows will change colors with GREY being a past hour, RED being the current hour, and GREEN being an upcoming hour. After adding a task to the hour of your choosing you can save to come back to it.
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
    
## Installation
    
First, you have to use `git clone` to create a local copy of the repository on your file system. Run `npm install` to install all of the necessary dependencies identified in `package.json`.

To start the application, run `node index.js` in the command line. Answer the prompts so your README file contains information. Once answered, your README file will be named `README.md` and will be located in the same folder as `index.js`.
    
## Usage

![A user runs a command line application, answers the prompts, and a markdown file is generated.](./readme-demo.gif)

When you run `node index.js`, the application uses `inquirer` package to prompt you in the command line. One these are entered, the reponses are passed to he application to generate the markdown. The generation for the Table of Contents also takes into account your reponses and will not created sections that you did not provide an answer for.

Lastly, the `fs` module will then write the generated markdown to your project's `README.md` file. See my example name `GeneratedREADME.md` located in the repsoitory.
    
  
  ## License
  
  [MIT License](https://opensource.org/licenses/MIT)
  
  ## Support
  
  Contact me if you have any questions
  - GitHub: [@EzequielMejiasMelo](https://github.com/EzequielMejiasMelo)
  - Email: [ezequiel.mejiasmelo@gmail.com](ezequiel.mejiasmelo@gmail.com)