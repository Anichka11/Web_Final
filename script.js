/* cookies */
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); 
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  
  // Function to get a cookie by name
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
  
      cookieNotification.classList.add("show");
      cookieNotification.classList.remove("hidden");
  
      acceptButton.addEventListener("click", () => {
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



// Navigation menu
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show'); 
}

