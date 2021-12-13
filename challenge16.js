/* function getAverageSpeed
   Description: A function declared to a constant variable that determines the "shuttle speed" from two position objects
   Parameters:
     firstPosition (Object) - The first position object; each position object contains the time in seconds 'time' and distance in meters 'altitude'
     secondPosition (Object) - The second position object
   Return:
     The rounded "shuttle speed"
*/
const getAverageSpeed = (firstPosition, secondPosition) => {
  // Declare 'speed' to the difference in distance and time
  let speed = Math.abs(secondPosition.altitude-firstPosition.altitude)/Math.abs(secondPosition.time-firstPosition.time);
  // Return rounded 'speed'
  return Math.round(speed*10)/10;
}
