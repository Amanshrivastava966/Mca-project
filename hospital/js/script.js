let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function toggleProfilePopup() {
    document.getElementById("profile-popup").style.display = "block";
    document.getElementById("profile-overlay").style.display = "block";
}

function closeProfilePopup() {
    document.getElementById("profile-popup").style.display = "none";
    document.getElementById("profile-overlay").style.display = "none";
}

function submitProfileForm() {
    // Add logic to handle profile form submission here
    closeProfilePopup(); // Close the profile pop-up after submission
}

// Attach the toggle function to the "Profile" link
document.querySelector('.profile').addEventListener('click', toggleProfilePopup);