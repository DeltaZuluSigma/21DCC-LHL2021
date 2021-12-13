/* function timeRemaining
   Description: A function declared to a constant variable that determines the days remaining between "today" and the launch date and places it in a new object
   Parameters:
     launchDate (String) - The launch date of the mission
     missionName (String) - The name of the mission
     fakeToday (String) - Today's "date"
   Return:
     A "countdown" object containing the 'missionName' and 'daysRemaining'
*/
const timeRemaining = (launchDate, missionName, fakeToday) => {
  // Declare and instantiate 'today' as today's accurate date
  const today = fakeToday || new Date();
  // Declare and instantiate 'ld' as a date object according to 'launchDate'
  const ld = new Date(launchDate);
  // Declare and instantiate 'diff'
  // Calculate the rounded difference between "today" and 'launchDate'
  const diff = Math.round((ld.getTime()-today.getTime())/(1000 * 3600 * 24));
  // Declare an empty object 'obj'
  let obj = {/*missionName: missionName,daysRemaining: diff*/};
  // Assign 'obj' the property 'missionName' as 'missionName'
  obj.missionName = missionName;
  // Assign 'obj' the property 'daysRemaining' as 'diff'
  obj.daysRemaining = diff;
  // Return 'obj'
  return obj;
}
