/* function checkGaugeStatus
   Description: A function declared to a constant variable that checks a gauge object to be within specifications
   Parameters:
     gauge (Object) - An object that contains the necessary float values to check against
   Return:
     'true' if the current gauge value is between its min and max, otherwise 'false'
*/
const checkGaugeStatus = (gauge) => {
  // Return conditional expression
  return (gauge.current > gauge.min && gauge.current < gauge.max);
}
/* function checkAllGauges
   Description: A function declared to a constant variable that checks all gauges to be within specifications
   Parameters:
     gaugeList (Array) - An array of gauge objects
   Return:
     'true' if all gauges are within specifications, otherwise 'false'
*/
const checkAllGauges = (gaugeList) => {
  // Declare 'rtn' with a base case value of true
  let rtn = true;
  // Foreach loop through all gauges
  gaugeList.forEach((gauge) => {
    // Failed gauge conditional
    if (!checkGaugeStatus(gauge)) { rtn = false; }
  });
  // Return 'rtn'
  return rtn;
}
