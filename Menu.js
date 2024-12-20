// script.js

// Initialize cart in localStorage if it doesn't exist
if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  
  // Function to add items to the cart
  function addToCart(item, price) {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"));
  
    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => cartItem.name === item);
    if (existingItem) {
      // Increase quantity if item exists
      existingItem.quantity++;
    } else {
      // Add new item to cart
      cart.push({ name: item, price: price, quantity: 1 });
    }
  
    // Save cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Update cart count on button
    updateCartCount();
  }
  
  // Update the cart count
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("cart-btn").innerText = `Cart (${totalItems})`;
  }
  
  // Function to navigate to the cart page
  function viewCart() {
    window.location.href = './cart.html'; // Assuming you have a cart.html page
  }
  
  // Update the cart count when the page loads
  window.onload = updateCartCount;
  