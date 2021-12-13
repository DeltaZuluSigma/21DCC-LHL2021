/* function parseMessage
   Description: A function declared to a constant variable that builds a message from its components
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

/* function parseTranscripts
   Description: A function declared to a constant variable that builds an array of messages from an array of message component objects
   Parameters:
     sepmsgs (Array) - An array of message component objects
   Return:
     An array of constructed messages
*/
const parseTranscripts = (sepmsgs) => {
  // Declare an empty array 'constmsgs'
  let constmsgs = []
  // Foreach loop through all message component objects
  sepmsgs.forEach((obj) => {
    // Append/push constructed messages into 'constmsgs'
    constmsgs.push(parseMessage(obj.origin,obj.message));
  });
  // Return 'constmsgs'
  return constmsgs;
}
