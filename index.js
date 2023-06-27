const inquirer = require('inquirer');
const dayjs = require('dayjs');
const fs = require('fs');
const { v4 } = require ('uuid');
const shapes = require ('./shapes');
const databaseShape = require('./models/databaseShape');

function showChoices() 
{
    inquirer.prompt 
    (
        
        {
            type: 'input',
            name: 'userName',
            message: 'Enter your Name:'
        },
        {
            type: 'input',
            name: 'threeCharacters',
            message: 'enter up to three characters'
        },
        {
            type: 'input',
            name: 'colorText',
            message: ' enter up text color'
        },
        {
            type: 'input',
            name: 'colorShape',
            message: 'enter up Shape color'
        },
        {
            type: 'list',
            message: 'Choose the shape',
            name: 'welcome_option',
            choices: ['circle', 'triangle', 'square']
        }  
    )
            .then(answer => 
                {
                    if(answer.welcome_option === 'Exit the app')
                    {
                        console.log('closing the app...');
                        process.exit();
                    }else 
                    {
                        createLogo();
                    }

                }) 
                    .catch(error => 
                        {
                            console.erro(error);
                        });   
}





