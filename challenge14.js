/* function switchAllTogglesOn
   Description: A function declared to a constant variable that returns an updated 'toggleList' with all switches on
   Parameters:
     toggleList (Array) - An array of switches
   Return:
     An updated 'toggleList' array
*/
const switchAllTogglesOn = (toggleList) => {
  // For each loop through all switches
  toggleList.forEach((toggle) => {
    // Set 'isOn' property to true
    toggle.isOn = true;
  });
  // Return updated 'toggleList'
  return toggleList;
}
