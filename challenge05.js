/* function addJobToAstronaut
   Description: A function declared to a constant variable that adds a new property to an 'astronaut' object, then returns said object
   Parameters:
     job (String) - The new 'job' property's value
   Return:
     An updated 'astronaut' object
*/
const addJobToAstronaut = (astronaut, job) => {
  // Assign the new 'job' property the value of the 'job' parameter
  astronaut.job = job;
  // Return 'astronaut' object
  return astronaut;
}
