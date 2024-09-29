document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Minimize the form and image on submit
    const form = document.querySelector('.left');
    const image = document.querySelector('.image-container');
    const logo = document.querySelector('.logo');
    const loginButton = document.getElementById('login-btn');

    // Show the loading animation and disable the login button
    loginButton.classList.add('loading');
    loginButton.disabled = true;

    setTimeout(() => {
        // Stop the loading animation and enable the login button
        loginButton.classList.remove('loading');
        loginButton.disabled = false;

        // Apply the "minimized" class to the form and image for animation
        form.classList.add('minimized');
        image.classList.add('minimized');

        // After the form and image disappear, display the logo
        setTimeout(() => {
            form.classList.add('hidden'); // Hide the form
            image.classList.add('hidden'); // Hide the image

            logo.style.display = 'block'; // Display the logo
            logo.classList.add('centered'); // Center the logo for animation

            // After logo appears, apply the minimized animation to it
            setTimeout(() => {
                logo.classList.add('minimized');

                // Start reverse animation to reset the page after 1 second
                setTimeout(() => {
                    startReverseAnimation();
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000); // Set 1 second timeout to simulate loading process
});


function startReverseAnimation() {
    const image = document.querySelector('.image-container');
    const logo = document.querySelector('.logo');
    const form = document.querySelector('.left');

    // Show the image and logo in the center first
    image.classList.remove('minimized', 'hidden');
    logo.classList.remove('minimized', 'hidden', 'centered');

    // Add classes for expanding animations
    image.classList.add('center-image');

    setTimeout(() => {
        logo.classList.add('center-logo');
    }, 1000)

    // Move them to their original positions after expansion
    setTimeout(() => {
        image.classList.remove('center-image');
        image.classList.add('right-image');

        // logo.classList.remove('center-logo');
        // logo.classList.add('top-left-logo');

    }, 1000);

    setTimeout(() => {
        logo.classList.remove('center-logo');
        image.classList.remove('right-image');
        form.classList.remove('minimized', 'hidden');
    }, 3000);
}

function checkInput() {
    const onlineID = document.getElementById("onlineID").value;
    const password = document.getElementById("password").value;
    const loginButton = document.getElementById("login-btn");
    const checkbox = document.getElementById('myCheckbox');

    // Enable/disable login button
    loginButton.disabled = !(onlineID && password);
    loginButton.classList.toggle("enabled", onlineID && password);

    // Remove box-enable if checkbox is checked
    if (checkbox.checked) {
        document.querySelector('.form-group-onlineID').classList.remove("box-enable");
        document.querySelector('.form-group-password').classList.remove("box-enable");
    }

    const onlineIdBox = document.querySelector('.form-group-onlineID');
    const passwordBox = document.querySelector('.form-group-password');
    const onlineIdInputBox = document.querySelector('.onlineID');
    const passwordInputBox = document.querySelector('.password');

    if (!onlineID) {
        onlineIdBox.classList.remove("box-color");
        onlineIdInputBox.classList.remove("box-color");
        passwordBox.classList.remove("box-enable");
    }
    if (!password) {
        passwordBox.classList.remove("box-color");
        passwordInputBox.classList.remove("box-color");
    }

    if (onlineID) {
        onlineIdBox.classList.add("box-color");
        onlineIdInputBox.classList.add("box-color");
    }
    if (password) {
        passwordBox.classList.add("box-color");
        passwordInputBox.classList.add("box-color");
    }
}

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("showPassword");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    showPasswordButton.textContent = passwordInput.type === "password" ? "Show" : "Hide";
}

function handleSelect(event) {
    const onlineIdBox = document.querySelector('.form-group-onlineID');
    const passwordBox = document.querySelector('.form-group-password');

    // Apply class based on focused input field
    if (event.target.id === "onlineID") {
        onlineIdBox.classList.add("box-enable");
        passwordBox.classList.remove("box-enable");
    } else if (event.target.id === "password") {
        passwordBox.classList.add("box-enable");
        onlineIdBox.classList.remove("box-enable");
    }
}

// Event listeners
document.getElementById("onlineID").addEventListener("focus", handleSelect);
document.getElementById("password").addEventListener("focus", handleSelect);
document.getElementById("onlineID").addEventListener("input", checkInput);
document.getElementById("password").addEventListener("input", checkInput);
document.getElementById('myCheckbox').addEventListener('change', checkInput);