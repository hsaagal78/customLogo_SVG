const inquirer = require('inquirer');
const dayjs = require('dayjs');
const fs = require('fs');
const { v4 } = require ('uuid');
const {ShapeLogo,Triangle,Circle, Rectangle} = require('./shapes');
const databaseShape = require('./models/dataBaseShapes');
const logo = require('./logo.svg');


function showChoices() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'userName',
          message: 'Enter your Name:',
        },
        {
          type: 'input',
          name: 'threeCharacters',
          message: 'Enter up to [3] characters',
        },
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
        const { userName, threeCharacters, colorText, colorShape, shapeOption } = answer;
  
        if (shapeOption === 'Exit the app') {
          console.log('Closing the app...');
          process.exit();
        } else {
          createLogo(userName, threeCharacters, colorText, colorShape, shapeOption);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function createLogo(userName, threeCharacters, colorText, colorShape, shapeOption) {
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
        <text x="150" y="100" font-size="48" fill="${colorText}" text-anchor="middle" dominant-baseline="middle">${threeCharacters}</text>
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
  
  showChoices();