const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require('./lib/svg.js');

class CLI {
    run() {
      return inquirer.prompt([
      
      {
        type: 'input',
        message: 'Choose your text. (Max three characters)',
        name: 'text',
      },
    
      {
        type: 'input',
        message: 'Choosecolor. (Enter color keyword or hexadecimal)',
        name: 'textColor',
      },
      
      {
        type: 'list',
        message: 'Chose your shape.',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape',
      },
      
      {
        type: 'input',
        message: 'Choose shape color (Color keyword or hexadecimal)',
        name: 'shapeColor', 
      },
    ])
      
      .then((prompts) => {
        if (prompts.text.length > 3) {
          console.log('Cannot exceed three letters.');
          promptUser();
        } else {
          
          let svg = new SVG();
          svg.createText(prompts.text, prompts.textColor);
  
          let shape;
          if (prompts.shape === 'Circle') {
            shape = new Circle();
            svg.setShape(shape);
            svg.shapeE += `<circle cx='150' cy='115' r='80' fill='${prompts.shapeColor}'/>`;
          } else if (prompts.shape === 'Triangle') {
            shape = new Triangle();
            svg.createShape(shape);
            svg.shapeE += `<polygon points='150, 18 244, 182 56, 182' fill='${prompts.shapeColor}'/>`;
          } else {
            shape = new Square();
            svg.setShape(shape);
            svg.shapeE += `<rect x='90' y='40' width='160' height='160' fill='${prompts.shapeColor}'/>`;
          }
          
          writeToFile('logo.svg', svg.render());
        }
      })
      .catch((error => {
        console.log(error);
      }))
  }}
  //Runs the CLI
  const cli = new CLI;
  cli.run();
  
  
  
  
  
  
  // Writing data to the file
  function writeToFile(fileName, svg) {
    fs.writeFile(fileName, svg, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('logo.svg has been generated!');
      }
    });
  }