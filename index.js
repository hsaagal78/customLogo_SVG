const inquirer = require('inquirer');
const dayjs = require('dayjs');
const fs = require('fs');
const { v4 } = require ('uuid');
const {ShapeLogo,Triangle,Circle, Rectangle} = require('./lib/shapes');
const { describe, it, expect } = require('jest');
const databaseShape = require('./models/dataBaseShapes');
const logo = require('./logo.svg');
// const { text } = require('stream/consumers');
let text ='';


function showChoices() {
          
  // function randomCharacters() {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'userName',
            message: 'Enter your Name:',
          },
        ])
        .then((answer) => {
          const { userName } = answer;
          const splitName = userName.split('');
          const combinations = [];
    
          for (let i = 0; i < 4; i++) {
            const randomPositions = [];
            for (let j = 0; j < 3; j++) {
              const randomPosition = Math.floor(Math.random() * splitName.length);
              randomPositions.push(randomPosition);
            }
    
            const combination = randomPositions.map((position) => splitName[position]).join('');
            combinations.push(combination);
          }
    
          console.log(combinations);
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
            message: 'There are some example base on your name Enter up to [3] characters for your logo',
          },
          {
            type: 'confirm',
            name: 'capitalLetters',
            message: 'Do you want Capital letter for your logo?',
          },
        ])
        .then((answer) => {
          const {threeCharacters, capitalLetters } = answer;
    
          if (capitalLetters) {
           const finalThreeCharacters = threeCharacters.toUpperCase();
           text = finalThreeCharacters;
           console.log(finalThreeCharacters);
           shapeAndColor();
          }else {
            const {threeCharacters, capitalLetters } = answer;
            text = threeCharacters;
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
        message: 'Enter text color',
      },
      {
        type: 'input',
        name: 'colorShape',
        message: 'Enter Shape color',
      },
      {
        type: 'list',
        message: 'Choose the shape',
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
    const ShapeClass= shapeClasses[shapeOption];
    const shape = new ShapeClass (shapeOption, colorShape);
    const shapeSvg =shape.shapeRenderResult;
    
    console.log(shapeSvg);
  
    const lSvg = `
      <svg  
        xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSvg}
        <text x="150" y="100" font-size="48" fill="${colorText}" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>
    `;
  
    fs.writeFile('logo.svg', lSvg, (err) => {
      if (err) {
        console.error('Error creating logo:', err);
        return;
      }
      console.log('Generated logo.svg');
    });
 }
}
  
  showChoices();