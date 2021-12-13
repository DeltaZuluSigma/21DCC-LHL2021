/* function checkGaugeStatus
   Description: A function declared to a constant variable that returns a boolean value according to whether the "current gauge value" is between its provided minimum and maximum guage values
   Parameters:
     gauge (Object) - An object that contains the necessary float values to check against
   Return:
     'true' if the current gauge value is between its min and max, otherwise 'false'
*/
const checkGaugeStatus = (gauge) => {
  // Return conditional expression
  return (gauge.current > gauge.min && gauge.current < gauge.max);
}
