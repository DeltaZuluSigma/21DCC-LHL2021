/* function generateAstronautTag
   Description: A function declared to a constant variable that returns an astronaut's tag from an astronaut object
     - An astronaut object would contain the astronaut's: prefix, first name, last name, and nickname
     - An astronaut's tag would be formatted as
         "<prefix>: <first name> "<nickname>" <last name>"
   Parameters:
     astronaut (Object) - An object that contains the necessary String values
   Return:
     A string "astronaut tag" formatted like above
*/
const generateAstronautTag = (astronaut) => {
  // Returning a concantenated string in the appropriate format
  return astronaut.prefix+": "+astronaut.firstName+" \""+astronaut.nickname+"\" "+astronaut.lastName;
}
