/* function organizeData
   Description: A function declared to a constant variable that organizes the received data
   Parameters:
     receivedData (Array) - An array of received data
   Return:
     An organized object of the previously received data
*/
const organizeData = (receivedData) => {
  // Declare empty object 'odata'
  let odata = {};
  // Foreach loop through received data to declare properties of each data type
  receivedData.forEach((rdata) => { odata[rdata.type] = []; });
  // Foreach loop through received data to append said data to each type
  receivedData.forEach((rdata) => { odata[rdata.type].push(rdata.data); });
  // Return 'odata' object
  return odata;
}
