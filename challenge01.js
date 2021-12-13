/* function parseMessage
   Description: A function declared to a constant variable that returns the sender's name and message in the format "<sender name>: <message>"
   Parameters:
     origin (String) - The sender's name
     message (String) - The sender's message
   Return:
     A sender:message pair with the proper format
*/
const parseMessage = (origin, message) => {
  // Returning a concantenated string in the appropriate format
  return origin+": "+message;
}
