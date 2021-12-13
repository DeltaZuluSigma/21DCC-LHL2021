/* function storeWeatherConditions
   Description: A function declared to a constant variable that creates an object that has the parameters as properities
   Parameters:
     temperature (Number) - The temperature in Fahrenheit to be converted into Celsius
     condition (String) - The weather condition
     windSpeed (Number) - The wind speed in miles/hour to be converted to meters/second
     windDirection (String) - The cardinal wind direction
   Return:
     A 'weather' object containing all (converted) parameters
*/
const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Declare empty 'weather' object
  let weather = {}
  // Assign appropriate Celsius 'temperature' property
  weather.temperature = Math.round((temperature-32)/1.8);
  // Assign [weather] 'condition' property
  weather.condition = condition;
  // Assign appropriate m/s 'windSpeed' property
  weather.windSpeed = Math.round(windSpeed/2.237);
  // Assign 'windDirection' property
  weather.windDirection = windDirection;
  // Return populated 'weather' object
  return weather;
}
