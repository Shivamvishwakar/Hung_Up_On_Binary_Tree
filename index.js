document.getElementById('login-button').addEventListener('click', function() {
    // Implement login functionality here
});

document.getElementById('submit-issue-button').addEventListener('click', function() {
    // Implement issue submission functionality here
});

// Implement code to fetch and display real-time updates from city departments

// Implement code to populate the user dashboard with user-specific data


// issue page js 
// script.js

// Basic form validation
document.querySelector("form").addEventListener("submit", function (event) {
    const issueType = document.querySelector("#issue_type");
    const description = document.querySelector("#description");
    const location = document.querySelector("#location");

    if (!issueType.value || !description.value || !location.value) {
        alert("Please fill in all required fields.");
        event.preventDefault();
    }
});