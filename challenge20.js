/* function confirmReentryPlans
   Description: A function declared to a constant variable that checks current data with a 'checks' object's data
   Parameters:
     speed (Number) - The current "shuttle speed"
     missionData (Object) - The mission data entries to be checked
     Checks (Object) - An object of data for data to be checked against
   Return:
     'true' if all parameters are met, otherwise 'false'
*/
const confirmReentryPlans = (speed, missionData, checks) => {
  // 'speed' parameters conditional
  if (speed > checks.maxSpeed || speed < checks.minSpeed) { return false; }
  // Foreach loop through mission data types
  for(let type in missionData) {
    // Entry number comparasion conditional
    if (missionData[type].length != checks.dataEntries[type]) { return false; }
  }
  // Base case return true
  return true;
}
