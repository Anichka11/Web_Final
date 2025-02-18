// cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); 
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

document.addEventListener("DOMContentLoaded", () => {
    const cookieNotification = document.getElementById("cookie-notification");
    const acceptButton = document.getElementById("accept-cookies");

    if (getCookie("cookies_accepted")) {
        cookieNotification.style.display = "none"; 
        return;
    }

    cookieNotification.classList.add("show");
    cookieNotification.classList.remove("hidden");

    acceptButton.addEventListener("click", () => {
        setCookie("cookies_accepted", "true", 365); 
        cookieNotification.classList.remove("show");
        setTimeout(() => {
            cookieNotification.style.display = "none"; 
        }, 500);
    });
});






// Cocktail API fetch
const apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const cocktailList = document.getElementById('cocktail-list');
        data.drinks.forEach(drink => {
            const drinkElement = document.createElement('div');
            drinkElement.classList.add('cocktail');
            drinkElement.innerHTML = `
                <h3>${drink.strDrink}</h3>
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <p>${drink.strInstructions}</p>
            `;
            cocktailList.appendChild(drinkElement);
        });
    });

// Load form data from localStorage
window.onload = function() {
    if (localStorage.getItem('name')) {
        document.getElementById('name').value = localStorage.getItem('name');
    }
    if (localStorage.getItem('email')) {
        document.getElementById('email').value = localStorage.getItem('email');
    }
    if (localStorage.getItem('message')) {
        document.getElementById('message').value = localStorage.getItem('message');
    }
};

// Save form data to localStorage
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    if (name && email && message) {
        alert('Form submitted successfully!');

        document.getElementById('contact-form').reset();

        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('message');
    } else {
        alert('Please fill all fields correctly.');
    }
});


// Email validation 
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
}

const emailInput = document.getElementById('email'); 
const form = document.getElementById('contact-form'); 

form.addEventListener('submit', function(event) {
    const email = emailInput.value;

    if (!validateEmail(email)) {
        event.preventDefault(); 
        alert("Please enter a valid email address.");
    } else {
        alert("Email is valid!");
    }
});



// Navigation menu
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show'); 
}


const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.border = "2px solid #ff7f50";
        input.style.transition = "border 0.3s ease";
    });

    input.addEventListener('blur', () => {
        input.style.border = "1px solid #ccc";
    });
});


