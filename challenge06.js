/* function addAstronautToRoster
   Description: A function declared to a constant variable that pushes an 'astronaut' object into a 'roster' array
   Parameters:
     roster (Array) - An array that will be used to hold 'astronaut' objects
     astronaut (Object) - An object that contains info about an astronaut
   Return:
     An updated 'roster' array
*/
const addAstronautToRoster = (roster, astronaut) => {
  // Push or appends a new 'astronaut' object
  roster.push(astronaut);
  // Returns updated 'roster' array
  return roster;
}
