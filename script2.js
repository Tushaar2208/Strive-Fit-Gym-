function predictReps() {
    const currentWeight = parseFloat(document.getElementById('current-weight').value);
    const currentReps = parseInt(document.getElementById('current-reps').value, 10);
    const newWeight = parseFloat(document.getElementById('new-weight').value);
    const resultElement = document.getElementById('result');

    // Validate inputs
    if (currentWeight > 0 && currentReps > 0 && newWeight > 0) {
        // Calculate 1RM using Epley Formula (1RM = Weight * (1 + Reps/30))
        const oneRM = currentWeight * (1 + (currentReps / 30));
        
        // Calculate estimated reps for new weight using the formula: 
        // Reps = 30 * ((1RM / New Weight) - 1)
        const estimatedReps = Math.floor(30 * ((oneRM / newWeight) - 1));
        
        // Display result based on the calculation
        if (newWeight <= oneRM && estimatedReps > 0) {
            resultElement.innerHTML = `
                <p>With ${newWeight} kg, you can perform approximately <strong>${estimatedReps}</strong> reps.</p>
                <p><em>Note:</em> Always prioritize proper form and safety while lifting!</p>
            `;
        } else if (newWeight > oneRM) {
            resultElement.innerHTML = `
                <p>The new weight exceeds your estimated maximum capacity. Lift cautiously or reduce the weight.</p>
            `;
        } else {
            resultElement.innerHTML = `
                <p>You might not perform any reps with this weight. Start with lighter weights to build strength.</p>
            `;
        }
    } else {
        resultElement.innerHTML = "<p>Please enter valid numbers for all fields.</p>";
    }
}
