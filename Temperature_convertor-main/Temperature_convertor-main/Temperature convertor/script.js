
function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const fromScale = document.getElementById('fromScale').value;
    const toScale = document.getElementById('toScale').value;
    
    if (!isNaN(temperatureInput)) {
        let result;
        
        if (fromScale === 'celsius' && toScale === 'fahrenheit') {
            result = (temperatureInput * 9/5) + 32;
        } else if (fromScale === 'celsius' && toScale === 'kelvin') {
            result = temperatureInput + 273.15;
        } else if (fromScale === 'fahrenheit' && toScale === 'celsius') {
            result = (temperatureInput - 32) * 5/9;
        } else if (fromScale === 'fahrenheit' && toScale === 'kelvin') {
            result = (temperatureInput - 32) * 5/9 + 273.15;
        } else if (fromScale === 'kelvin' && toScale === 'celsius') {
            result = temperatureInput - 273.15;
        } else if (fromScale === 'kelvin' && toScale === 'fahrenheit') {
            result = (temperatureInput - 273.15) * 9/5 + 32;
        } else {
            result = temperatureInput; // Same scale, no conversion needed
        }
        
        document.getElementById('result').innerHTML = `${temperatureInput} ${fromScale} is equal to ${result.toFixed(2)} ${toScale}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter a valid number.';
    }
}
