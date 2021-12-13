/* function listAstronautJobs
   Description: A function declared to a constant variable that converts a roster of astronauts to a list of the astronauts' jobs
   Parameters:
     roster (Array) - An array/list of astronauts
   Return:
     An array of the astronauts' jobs
*/
const listAstronautJobs = (roster) => {
  /*** Submitted Code ***
  // Declare an empty array 'jobList'
  let jobList = [];
  // Loop through the roster of astronauts
  roster.forEach((element) => {
    // Add each astronaut's job to 'jobList'
    jobList.push(element.job);
  });*/
  let jobList = roster.map((element) => {return element.job});
  // Return 'jobList'
  return jobList;
}
