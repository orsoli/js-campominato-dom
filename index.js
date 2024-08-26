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



// --- Procesing Phase
// Create an event listener in for element
formElement.addEventListener('submit',(e) => {
    e.preventDefault() // Blocked the default behavor of form submit

    // Retrieve score element for DOM
    const scoreElement = document.getElementById('score')

    let score = 0; // Create a variable initialized for score
    const NumberOfBombs = 16; // Create a variable 

    scoreElement.innerText = score // Print the initialized score in DOM
    btnElement.innerText = 'Replay' // Ghange the btn inner text after one click
    gridElement.innerHTML = '' // Clear the elements inside the grid element to ristart the game

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

    const bombs = [] // Create an array variable to ave the 16 different numbers
    // Create while loop to generate 16 times random number
    while(bombs.length < NumberOfBombs){
        const randomNumber = Math.floor(Math.random() * gridSize) + 1 // Create random nr from 1 to gridSize
        // Check if random number is not included to bombs array and push it
        if(!bombs.includes(randomNumber)) bombs.push(randomNumber) 
        }
    console.log(bombs) // Print in console bombs array to insure they are correct

    // Use a for loop to create 100 times a cell element and insert in DOM like gridElement child
    for(let i = 1; i <= gridSize; i++){
        const cellElement = createElement('div')// Create div element
        addClass(cellElement,"cell") // Add class='cell' in this div element already created
        gridElement.appendChild(cellElement) // Append like child new div in the grid element in DOM
        cellElement.innerText = i // Add content in the element cell
        // Add a click event of cell element
        cellElement.addEventListener('click',(e) => {
            // Create the message variable using in end game case
            let message;
            // Create max score variable
            const maxScore = gridSize - NumberOfBombs
            // Chek if cell element contains class'unclickable' and 'bomb-cell' this become unclickable
            if(cellElement.classList.contains('unclickable') || cellElement.classList.contains('bomb-cell')) return;
            // Check if in array bombs is included the cell innerTex
            if(bombs.includes(parseInt(e.target.innerText))) {
                addClass(cellElement,"bomb-cell") // Add  bomb-cell class in cell Element
                message = 'The game is over. Your score:'
            }else{ 
                addClass(cellElement,"unclickable") // Add unclickable class in cellElment
                scoreElement.innerText = ++score // Insert  increased score in score element in DOM like inner text
                message = 'End Game. Your score:'
                if(maxScore === score) alert(`${message} ${score}`)
            }
        })

    }

    
})