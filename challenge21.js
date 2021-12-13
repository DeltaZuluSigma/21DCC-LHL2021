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


/* function parseMissionSummary
   Description: A function declared to a constant variable that consolidates exchanged messages into a transcript in addition to mission data
   Parameters:
     exchanges (Array) - An array of message objects
     missionData (Object) - An object containing properties of array entries
   Return:
     The consolidated object
*/
const parseMissionSummary = (exchanges, missionData) => {
  // Declare empty array 'transcripts'
  let transcripts = [];
  // Declare empty object 'listobj'
  let listobj = {};
  // Foreach loop through 'exchanges' array
  exchanges.forEach((obj) => {
    // Append/push parsed messages to 'transcripts'
    transcripts.push(parseMessage(obj.origin,obj.message));
  });
  // Declare and instantiate the 'transcript' property 'transcripts'
  listobj.transcript = transcripts;
  // Declare and instantiate the 'missionData' property 'missionData'
  listobj.missionData = missionData;
  // Return consolidated object 'listobj'
  return listobj;
}
