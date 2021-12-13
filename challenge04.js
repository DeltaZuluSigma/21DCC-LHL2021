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
