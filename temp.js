function convert(unit) {
    if (unit === 'C') {
        let celsius = document.getElementById('celsius').value;
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('result').innerHTML = `Converted to Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    } else if (unit === 'F') {
        let fahrenheit = document.getElementById('fahrenheit').value;
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('result').innerHTML = `Converted to Celsius: ${celsius.toFixed(2)} °C`;
    }
}
