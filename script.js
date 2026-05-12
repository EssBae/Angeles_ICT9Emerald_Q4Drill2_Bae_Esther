function calculate() {
    let degree = document.getElementById("degree").value;
    alert("You entered: " + degree);
}
        function checkHeatIndex() {
            let degree = parseFloat(document.getElementById('degree').value);
            let humidity = parseFloat(document.getElementById('humidity').value);

            // Formula 
            let heatIndexC = degree + (0.33 * humidity) - 4;
            
            let status;

            if (heatIndexC < 27) {
                status = "Comfortable / Cool";
            } else if (heatIndexC >= 28 && heatIndexC <= 32) {
                status = "Warm";
            } else if (heatIndexC >= 33 && heatIndexC <= 37) {
                status = "Hot";
            } else if (heatIndexC >= 38 && heatIndexC <= 41) {
                status = "Very Hot / Caution";
            } else {
                status = "Extreme Heat / Danger";
            }

            // Window alert
            alert(`Heat Index: ${heatIndexC.toFixed(2)} °C\nStatus: ${status}`);
        }