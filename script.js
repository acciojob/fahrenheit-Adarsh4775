function toFahrenheit(celsius) {
 // Write your code here
	const Fahrenheit = (celsius * 9/5) + 32;
	return Fahrenheit.toFixed(2);
}
toFahrenheit();
// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
