function analyzeSentence() {
    const input = document.getElementById("sentence").value.trim();
    
    if (!input.endsWith('.')) {
        alert("⚠️ Please make sure your sentence ends with a point (.)");
        return;
    }

    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Process character by character
    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        length++;   // Count every character (including the point)

        // Count vowels
        if ('aeiouAEIOU'.includes(char)) {
            vowelCount++;
        }

        // Count spaces for words
        if (char === ' ') {
            wordCount++;
        }
    }

    // Add 1 for the last word
    wordCount++;

    // Display results
    document.getElementById("length").textContent = length;
    document.getElementById("words").textContent = wordCount;
    document.getElementById("vowels").textContent = vowelCount;
    document.getElementById("result").style.display = "block";
}