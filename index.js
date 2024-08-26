/* Exercise
    The computer must generate 16 random numbers within the same range of the chosen difficulty:the bombs.
    Be careful: only one bomb can be placed in the same cell,
    so there can’t be two identical numbers in the bomb array.
    Next, the user clicks on a cell: if the number is present in the list of generated numbers,
    we have stepped on a bomb. 
    The cell turns red, and the game ends.Otherwise,
    the clicked cell turns blue, and the user can continue clicking on the other cells.
    The game ends when the player clicks on a bomb or when they reach the maximum possible number 
    of allowed numbers (meaning they have revealed all the cells that are not bombs).
    At the end of the game, the software must communicate the score, 
    the number of times the user has clicked on a cell that was not a bomb.
*/

/* Structure
    M1 - Prepare to keep the user's score. When the user clicks on a cell, we increase the score. 
        Also the cell can no longer be clicked on.
            - Create in HTML an element to print the score
            - In JS retrieve this element to insert the score
            - In the click cell event create a score variable initialized from 0 and then increment it
            - Print in page the score
            - Create in css a class unclicked to do the cell not allowed click
            - In JS add this cla in cell element

    M2 - Generate 16 random numbers from 1 to max of cell. Print in console to insure they are correct
            Inside click play btn event
            - Create an array variable called bombs to save 16 diferent random numbers
            - Create a loop to generate 16 times a number
            - Generate a number
            - Check if this number is not included in the bombs array and add it in this array
            - Print in console bombs array

*/

// ---  Preparation Phase
// Define  functions 
/**
 * 
 * @param {string} type 
 * @returns {string}
 */
const createElement = type => document.createElement(type) // Create new element

/**
 * 
 * @param {*} element 
 * @param {*} nameClass 
 * @returns 
 */
// Add class funtion expect 2 param element and nameclass
const addClass = (element, nameClass) => element.classList.add(nameClass) 

/**
 * 
 * @param {*} elementName 
 * @returns {string}  // Return a string
 */
const getSelected = elementName => elementName.value // Create a function to chek selected option

// Retrieve interested element from DOM
const formElement = document.getElementById('play-form')
const gridElement = document.getElementById('grid')
const selectedElement = document.getElementById('level')
const btnElement = document.getElementById('play-btn')

// Create a variable initialized
let score = 0;


// --- Procesing Phase
// Create an event listener in for element
formElement.addEventListener('submit',(e) => {
    e.preventDefault() // Blocked the default behavor of form submit
    gridElement.innerHTML = '' // Clear the elements inside the grid element to ristart the game
    btnElement.innerText = 'Replay' // Ghange the btn inner text after one click
    // Check the option and change variable
    switch(getSelected(selectedElement)){
        case 'normal':
            row = 9
            col = 9
            break;
        case 'hard':
            row = 7
            col = 7
            break;
        case 'easy':
            row = 10
            col = 10
            break;
    }
    // Retrieve root element to give the right value
    const root = document.querySelector(':root')
    root.style.setProperty('--cell-per-row', col)

    const gridSize = row * col // The size of grid in total number

    // Use a for loop to create 100 times a cell element and insert in DOM like gridElement child
    for(let i = 1; i <= gridSize; i++){
        const cellElement = createElement('div')// Create div element
        addClass(cellElement,"cell") // Add class='cell' in this div element already created
        gridElement.appendChild(cellElement) // Append like child new div in the grid element in DOM
        cellElement.innerText = i // Add content in the element cell

        // Add a click event of cell element
        cellElement.addEventListener('click',() => {
            // Retrieve score element for DOM
            const scoreElement = document.getElementById('score')
            // Chek if is clicked to stop counting score
            if(cellElement.classList.contains('unclicked')) return;

            addClass(cellElement,"unclicked") // Add unclicked class
            scoreElement.innerText = ++score // Insert the the content of cell in theis element like inner text
            

        })

    }

    const bombs = [] // Create an array variable to ave the 16 different numbers
    // Create while loop to generate 16 times random number
    while(bombs.length < 16){
        const randomNumber = Math.floor(Math.random() * gridSize) + 1 // Create random nr from 1 to gridSize
        // Check if random number is not included to bombs array and push it
        if(!bombs.includes(randomNumber)) bombs.push(randomNumber) 
        }
    console.log(bombs) // Print in console bombs array to insure they are correct
    
})