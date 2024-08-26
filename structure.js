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

    M3 - When the user clicks on a cell, check if they have stepped on a bomb 
         by verifying if the cell number is present in the bomb array.
         If Yes, the cell turns red (we collect the score and write in the console that the game ends)
         Otherwise, it turns blue, and we need to increase the score.
            - Create bomb-cell class in CSS
            - Inside the cell click event check if in array bombs is included the cell innerText
            - If yes add in cell element bomb-cell class
            - Else add unclickable class in cell element

*/