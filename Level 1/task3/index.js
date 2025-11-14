function convertTemp() {
        let temp = parseFloat(document.getElementById("temp").value);
        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;
        let result = document.getElementById("result");
        let converted;

        if (isNaN(temp)) {
        result.innerHTML = "⚠️ Please enter a valid number!";
        return;
        }

      // Convert from source unit to Celsius first
    switch (from) {
        case "Celsius":
            converted = temp;
            break;
        case "Fahrenheit":
            converted = (temp - 32) * 5 / 9;
            break;
        case "Kelvin":
            converted = temp - 273.15;
            break;
    }

      // Convert from Celsius to target unit
    switch (to) {
        case "Celsius":
            break;
        case "Fahrenheit":
             converted = (converted * 9 / 5) + 32;
            break;
        case "Kelvin":
            converted = converted + 273.15;
            break;
    }

    result.innerHTML = `${temp}° ${from} = ${converted.toFixed(2)}° ${to}`;
    }