/* function switchToggle
   Description: A function declared to a constant variable that returns an updated 'toggle' object with the 'isOn' property updated with the opposite value
   Parameters:
     toggle (Object) - An object that contains the toggle's name and it's state
   Return:
     An updated 'toggle' object
*/
const switchToggle = (toggle) => {
  // Assign isOn property opposite value
  toggle.isOn = (toggle.isOn)?false:true;
  // Return toggle object
  return toggle;
}

/* function switchSpecificToggle
   Description: A function declared to a constant variable that toggles only a specific switch
   Parameters:
     toggleList (Array) - An array of 'toggle' objects
     specificToggle (String) - A 'toggle' object's name
   Return:
     The updated 'toggleList' array
*/
const switchSpecificToggle = (toggleList, specificToggle) => {
  // Foreach loop through 'toggleList' array
  toggleList.forEach((toggle) => {
    // Specific 'toggle' object conditional
    if (toggle.name == specificToggle) { switchToggle(toggle); }
  });
  // Return updated 'toggleList' array
  return toggleList;
}
