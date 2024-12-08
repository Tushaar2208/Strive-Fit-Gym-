document.getElementById("calorieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = document.getElementById("goal").value;

    // Calculate BMR using the Mifflin-St Jeor Equation
    let BMR;
    if (gender === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate Maintenance Calories
    const maintenanceCalories = BMR * activity;

    // Calculate weight adjustment based on goal
    let adjustment;
    let weightChange;
    if (goal === "weight_loss") {
        adjustment = -500; // Mild weight loss (500 calories deficit)
        weightChange = 0.5; // 0.5 kg loss per week
    } else {
        adjustment = 500; // Mild weight gain (500 calories surplus)
        weightChange = 0.5; // 0.5 kg gain per week
    }

    // Update the table based on the calculations
    document.getElementById("calorieTable").style.display = "table";
    document.getElementById("maintenanceCalories").innerText = maintenanceCalories;
    document.getElementById("adjustedCalories").innerText = maintenanceCalories + adjustment;
    document.getElementById("weightChange").innerText = weightChange;
    document.getElementById("moderateCalories").innerText = maintenanceCalories + (adjustment * 1.5); // Moderate adjustment
    document.getElementById("moderateWeightChange").innerText = weightChange + 0.5;
    document.getElementById("extremeCalories").innerText = maintenanceCalories + (adjustment * 2); // Extreme adjustment
    document.getElementById("extremeWeightChange").innerText = weightChange + 1;

    // Show the result section
    document.querySelector(".result-container").style.display = "block";
});
