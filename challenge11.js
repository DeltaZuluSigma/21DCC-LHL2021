/* function bookFreePlatform
   Description: A function declared to a constant variable that books a free platform for a mission date
   Parameters:
     platformList (Array) - An array/list of platforms
     missionDate (String) - A full date in string form
   Return:
     The updated 'platformList' array
*/
const bookFreePlatform = (platformList, missionDate) => {
  // For Loop through all platform objects in 'platformList'
  for (let i = 0; i < platformList.length; i++) {
    // Empty/Undefined platform book date conditional
    if (platformList[i].bookDate === undefined) {
      // Set platform's book date to 'missionDate'
      platformList[i].bookDate = missionDate;
      // Break for loop
      break;
    }
  }
  // Return 'platformList' array
  return platformList;
}
