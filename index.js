const inquirer = require('inquirer');
const fs = require('fs');
const {ShapeLogo,Triangle,Circle, Rectangle} = require('./lib/shapes');
const { describe, it, expect } = require('jest');
const logo = require('./logo.svg');

let text ='';


function showChoices() {
          
   //displays a message and expects the user to enter their name.
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'userName',
            message: 'Welcome! You have arrived at the logo creation platform, Enter your Name:',
          },
        ])
        .then((answer) => {
          const { userName } = answer;
          const splitName = userName.split('');//This line splits the userName string into an array of characters.
          const combinations = [];
    
          for (let i = 0; i < 4; i++) {
            const randomPositions = [];
            for (let j = 0; j < 3; j++) {
              const randomPosition = Math.floor(Math.random() * splitName.length);//This line generates a random position within the range of the splitName array.
              randomPositions.push(randomPosition);//This line adds the random position to the randomPositions array.
            }
    
            const combination = randomPositions.map((position) => splitName[position]).join('');//This line creates a combination of characters by mapping each random position to the corresponding character in splitName and then joining them together.
            combinations.push(combination);
          }
    
          console.log(combinations);//This line prints the combinations array to the console.
          showCapitalLetters()
        })
        .catch((error) => {
          console.error(error);
        });

    function showCapitalLetters() {
      inquirer
        .prompt([
         
          {
            type: 'input',
            name: 'threeCharacters',
            message: 'Based on your name, we have generated some examples for your logo. Please enter up to [3] characters to personalize your logo:',
          },
          {
            type: 'confirm',
            name: 'capitalLetters',
            message: 'Would you like to use capital letters for your logo?',
          },
        ])
        .then((answer) => {
          const {threeCharacters, capitalLetters } = answer;//his line extracts the threeCharacters and capitalLetters properties from the answer object using destructuring assignment.
    
          if (capitalLetters) {//This line checks if capitalLetters is true
           const finalThreeCharacters = threeCharacters.toUpperCase();
           text = finalThreeCharacters;//This line assigns finalThreeCharacters to the text variable.
           
           shapeAndColor();
          }else {
            const {threeCharacters, capitalLetters } = answer;
            text = threeCharacters;//This line assigns threeCharacters to the text variable.
            shapeAndColor();
          }
          
        })
        .catch((error) => {
          console.error(error);
        });
    }

  function shapeAndColor(){  
  inquirer
    .prompt([
     
   
      {
        type: 'input',
        name: 'colorText',
        message: 'Please enter the text color for your logo.',
      },
      {
        type: 'input',
        name: 'colorShape',
        message: 'Please enter the shape color for your logo.',
      },
      {
        type: 'list',
        message: 'Please choose the shape',
        name: 'shapeOption',
        choices: ['Circle', 'Triangle', 'Rectangle'],
      },
    ])
    .then((answer) => {
      const {colorText, colorShape, shapeOption } = answer;

      if (shapeOption === 'Exit the app') {
        console.log('Closing the app...');
        process.exit();
      } else {
        createLogo(colorText, colorShape, shapeOption);
         
      }
    })
    .catch((error) => {
      console.error(error);
    });

  }
  
  function createLogo( colorText, colorShape, shapeOption) {
    const shapeClasses = {
      Circle,
      Triangle,
      Rectangle
    };
    const ShapeClass= shapeClasses[shapeOption];// This line retrieves the shape class based on the selected shapeOption.
    const shape = new ShapeClass (shapeOption, colorShape);//This line creates a new instance of the selected shape class.
    const shapeSvg =shape.shapeRenderResult;//This line retrieves the SVG representation of the shape.
    
   
  
    const lSvg = `
      <svg  
        xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSvg}
        <text x="150" y="100" font-size="48" fill="${colorText}" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>
    `;
  
    fs.writeFile('logo.svg', lSvg, (err) => {//This line writes the SVG content to a file named logo.svg.
      if (err) {
        console.error('Error creating logo:', err);
        return;
      }
      console.log('Generated logo.svg');
    });
 }
}
  
  showChoices();