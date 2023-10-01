function convertTemperature() {
    const celsiusInput = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        const kelvin = celsiusInput + 273.15;
        document.getElementById('result').textContent = `Result: ${celsiusInput}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid temperature in Celsius.';
    }
}

