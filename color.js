
"use strict";


/**

 *  steps: 
 *  make a function to get a random color 
 *  make a function to take input from user and set that as the dimensions of your grid 
 *  Use a nested for loop to create the grid cells
 *  do some error validation for the dimensions inputted from the user, obviously we can't have them type things like "hello world" or null.


/**
 * function to generate a random color using the hexadecimal values 
 * @returns color
 */

function getRandomColor() {

    // value for all hexadecimal possibilities  

    const letters = '0123456789ABCDEF'; 
    let color = '#';
    // add a random combination of the hexadecimals to color # 

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}


/**

 *  function that takes in the user dimensions and stacks up cells to create a grid-looking grid-container 

 * @param {*} dimensions user input dimensions, number 

 */

function createGrid(dimensions) {

    const grid = document.querySelector('.grid-container');
    // Clear the grid to user again 
    grid.innerHTML = '';


    // nested loop to create the cells 

    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            // this is where we call the get random color 
            cell.style.backgroundColor = getRandomColor();
            // finally we append the cells 
            grid.appendChild(cell);

        }

    }

}


// Select the button element by its ID


document.getElementById('gridForm').addEventListener('submit', function(event) {
    // this is to maintain the grid for sometime since I was having trouble with the grid appearing for 1 second then disappearing 
    event.preventDefault();
    // get the user input 
    var userDimensions = document.getElementById('userDimensions').value;
    // parse it into an int 
    var intDimensions = parseInt(userDimensions);
    // work within the grid-container by selecting it 
    var gridContainer = document.querySelector('.grid-container');
    // have the user dimensions accessible dynamically in JS for our CSS file 
    gridContainer.style.setProperty('--user-dimensions', intDimensions);
    // finally call the creategrid() function to create the grid with our user input 
    createGrid(userDimensions);

}); 