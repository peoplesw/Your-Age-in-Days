
// Executes after all html, css, and js files are read in the browser
window.onload = () => {
    // Sets Get Age Button
    playButton.addEventListener('click', displayAgeInDays);
    // Sets Reset Game Button
    resetButton.addEventListener('click', resetGame);
};

const resultElement = document.getElementById('result-in-days');
const playButton = document.getElementsByClassName('btn-primary')[0];
const resetButton = document.getElementsByClassName('btn-danger')[0];

displayAgeInDays = () => {
    resetGame();
    
    setTimeout(() => {
        // Gets Year of Birth
        const yearOfBirth = Math.floor(prompt('What year were you born my friend?'));
        
        // Ensures yearOfBirth is a number greater than 0.
        if(isNaN(yearOfBirth) || yearOfBirth <= 0) {
            alert('Your input is not a valid birth year. Enter any number greater than 0.');
            return -1;
        }
        
        // Math. Years -> Days
        let yearsAlive = 2020-yearOfBirth;
        let ageInDays = yearsAlive * 365;
        
        // Display result in HTML & add Styles
        document.getElementById('result-container').classList.add('result-container-class');
        resultElement.innerText = `You are ${ageInDays} days old!`;
    }, 300)
}


resetGame = () => {
    resultElement.innerText = '';
    document.getElementById('result-container').classList.remove('result-container-class');
}






