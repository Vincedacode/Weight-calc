function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.textContent = "Please enter valid values!";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    result.textContent = `Your BMI is: ${bmi}`;
}
