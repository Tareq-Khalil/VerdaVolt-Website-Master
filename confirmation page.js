document.addEventListener("DOMContentLoaded", function () {
  
    const orderId = generateOrderId();
    document.getElementById("orderid").textContent = orderId;


    localStorage.setItem("orderID", orderId);


    document.getElementById("trackorderbutton").addEventListener("click", function () {
        trackOrder();
    });
});

function generateOrderId() {
    return "ORD-" + Math.floor(100000 + Math.random() * 900000);
}

function trackOrder() {
    const enteredId = document.getElementById("track order input").value.trim();
    const storedId = localStorage.getItem("orderID");
    const messageElement = document.getElementById("tracking-message");

    if (enteredId === "") {
        messageElement.textContent = "Please enter an Order ID.";
        messageElement.style.color = "red";
    } else if (enteredId === storedId) {
        messageElement.textContent = "Your order is being processed.";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Order ID not found. Please check and try again.";
        messageElement.style.color = "red";
    }
}
