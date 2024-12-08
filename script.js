// Function to calculate protein intake
function calculateProtein() {
    let weight = document.getElementById('weight').value;
    let activityLevel = document.getElementById('activity-level').value;

    if (weight && activityLevel) {
        weight = parseFloat(weight);
        let proteinRequirement;

        // Calculate protein based on activity level
        switch (activityLevel) {
            case 'sedentary':
                proteinRequirement = weight * 1.2;
                break;
            case 'light':
                proteinRequirement = weight * 1.4;
                break;
            case 'moderate':
                proteinRequirement = weight * 1.6;
                break;
            case 'active':
                proteinRequirement = weight * 1.8;
                break;
            case 'very-active':
                proteinRequirement = weight * 2.0;
                break;
            default:
                proteinRequirement = 0;
        }

        let proteinResult = document.getElementById('protein-result');
        proteinResult.style.visibility = 'hidden';
        proteinResult.innerHTML = `Your daily protein requirement is: ${proteinRequirement.toFixed(2)} grams`;

        // Get a random diet tip
        let tip = getRandomTip();
        let tipElement = document.getElementById('tip');
        tipElement.style.visibility = 'hidden';
        tipElement.innerHTML = `<p>${tip}</p>`;

        // Show results and tip after calculation
        document.getElementById('protein-result').style.visibility = 'visible';
        setTimeout(function () {
            tipElement.style.visibility = 'visible';
        }, 300);
    } else {
        alert('Please fill in both weight and activity level');
    }
}

// Function to get a random diet tip
function getRandomTip() {
    const dietTips = [
        "Include more legumes like lentils, chickpeas, and kidney beans in your meals for a protein boost.",
        "Opt for dairy products like milk, paneer, and yogurt for an easy source of protein.",
        "For a healthy snack, try roasted chickpeas or almonds, rich in protein and fiber.",
        "Indian dishes like dal (lentil soup) and rajma (kidney beans) are great sources of plant-based protein.",
        "Chicken, fish, and eggs are excellent sources of animal protein in the Indian diet.",
        "Add a scoop of whey protein to your smoothie for an extra protein punch post-workout.",
        "Quinoa, a complete protein source, is a great alternative to rice in Indian meals.",
        "Tofu and tempeh are excellent plant-based protein options for vegetarians.",
        "Sprouts, like moong dal sprouts, are a great addition to salads for protein and other nutrients.",
        "Including nuts and seeds, such as sunflower seeds, chia seeds, and flaxseeds, in your diet will increase your protein intake."
    ];

    // Randomly select one tip
    return dietTips[Math.floor(Math.random() * dietTips.length)];
}
