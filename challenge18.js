/* function chooseLunchWinner
   Description: A function declared to a constant variable that determines the "lunch winner"
   Parameters:
     listOfChoices (Array) - An array of 1 of 2 lunch choices
   Return:
     The "lunch winner" string
*/
const chooseLunchWinner = (listOfChoices) => {
  // Declare 'fchoice' as the first identifiable choice
  let fchoice = listOfChoices[0];
  // Declare empty string 'schoice'
  let schoice = "";
  // Declare 'fcount' as 0
  let fcount = 0;
  // Foreach loop through 'listOfChoices'
  listOfChoices.forEach((c) => {
    // Same as 'fchoice' conditional
    if (c == fchoice) { fcount++; }
    else { schoice = c; }
  });
  // Return conditional expression for majority "lunch winner"
  return (fcount > listOfChoices.length-fcount)?fchoice:schoice;
}
