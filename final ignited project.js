document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;
    const discountCodes = { "SALE10": 0.1, "SAVE20": 0.2 }; 

    const cartCount = document.getElementById("cart-count");
    const totalPriceElement = document.getElementById("total-price");
    const cartItemsContainer = document.getElementById("cart-items");
    const currencySelector = document.getElementById("currency-selector");
    const convertedPriceElement = document.getElementById("converted-price");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const checkoutButton = document.getElementById("checkout-button");
    const discountInput = document.querySelector(".discount-code input");
    const applyDiscountButton = document.getElementById("apply-discount");


    async function loadCurrencies() {
        try {
            const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            const data = await response.json();
            const rates = data.rates;

            for (const [key, value] of Object.entries(rates)) {
                const option = document.createElement("option");
                option.value = key;
                option.textContent = `${key} - ${value}`;
                currencySelector.appendChild(option);
            }
        } catch (error) {
            console.error("Error fetching currency data", error);
        }
    }
    loadCurrencies();

    function updateCart() {
        totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        cartCount.innerText = cart.length;
        totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems();
        convertCurrency(); 
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        document.querySelectorAll(".remove-from-cart").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const productName = product.querySelector("h2").innerText;
            const productPrice = parseFloat(product.querySelector("p").innerText.replace("$", ""));

            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });


    async function convertCurrency() {
        const currency = currencySelector.value;
        try {
            const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            const data = await response.json();
            const conversionRate = data.rates[currency] || 1;
            const convertedTotal = totalPrice * conversionRate;
            convertedPriceElement.innerText = `${currency} ${convertedTotal.toFixed(2)}`;
        } catch (error) {
            console.error("Error fetching conversion rates", error);
        }
    }

    currencySelector.addEventListener("change", convertCurrency);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        this.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    function applyDarkMode() {
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
            darkModeToggle.innerText = "☀️";
        }
    }

    applyDiscountButton.addEventListener("click", function () {
        const code = discountInput.value.toUpperCase();
        if (discountCodes[code]) {
            const discount = totalPrice * discountCodes[code];
            totalPrice -= discount;
            totalPriceElement.innerText = `$${totalPrice.toFixed(2)} (Discount Applied!)`;
            alert(`Discount applied! You saved $${discount.toFixed(2)}.`);
        } else {
            alert("Invalid discount code!");
        }
    });

    checkoutButton.addEventListener("click", function () {
        localStorage.removeItem("cart");
        window.location.href = "confirmation page.html";
    });

    applyDarkMode();
    updateCart();
});
