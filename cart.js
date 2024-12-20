// Function to get cart data from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to update cart data in localStorage
function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to render cart items
function renderCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');

    cartItemsContainer.innerHTML = ''; // Clear current cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            
            cartItem.innerHTML = `
                <div class="item-details">
                    <h2>${item.name}</h2>
                    <p>$${item.price} x ${item.quantity}</p>
                </div>
                <div class="actions">
                    <button onclick="updateQuantity('${item.name}', ${item.quantity - 1})">-</button>
                    <button onclick="updateQuantity('${item.name}', ${item.quantity + 1})">+</button>
                    <button onclick="removeItem('${item.name}')">Remove</button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });

        totalItems.innerText = itemCount;
        totalPrice.innerText = total.toFixed(2);
    }
}

// Function to update the quantity of an item in the cart
function updateQuantity(itemName, newQuantity) {
    if (newQuantity <= 0) return; // Prevent removing items by setting quantity to 0 or negative
    
    const cart = getCart();
    const item = cart.find(item => item.name === itemName);

    if (item) {
        item.quantity = newQuantity;
        updateCart(cart);
    }
}

// Function to remove an item from the cart
function removeItem(itemName) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== itemName); // Remove item by name
    updateCart(cart);
}

// Initial render of the cart on page load
window.onload = renderCart;
