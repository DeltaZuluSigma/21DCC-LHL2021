/* function listAstronautJobs
   Description: A function declared to a constant variable that converts a roster of astronauts to a list of the astronauts' jobs
   Parameters:
     roster (Array) - An array/list of astronauts
   Return:
     An array of the astronauts' jobs
*/
const averageWindSpeed = (weatherEntries) => {
  // Declare and instantiate 'aws'
  let aws = 0;
  // Loop through each element of the 'weatherEntries' array
  weatherEntries.forEach((element) => {
    // Add each element's wind speed to 'aws'
    aws += element.windSpeed;
  });
  // Return the rounded average wind speed
  return Math.round(aws / weatherEntries.length);
}
