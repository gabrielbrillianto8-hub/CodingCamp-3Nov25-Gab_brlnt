/// Display a welcome message when the page loads
welcomeMessage();

function welcomeMessage() {
    /// Prompt the user for their name
    let name = prompt("Please enter your name:");

    if (name != null) {

        /// Set the welcome message
        document.getElementById('welcome-speech').innerHTML = 'Hello ' + name + ', Welcome to Gabi Helm Care !';
    }
}

/// Validate the contact form
function validateForm() {}