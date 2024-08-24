

// Simulated product data (replace with actual data or API fetch)
const products = [
    { id: 1, name: 'Urban Jacket', price: '$79.99', image: 'images/jacket.jpeg' },
    { id: 2, name: 'I phone 7 plus', price: '$129.99', image: 'images/product.jpg' },
    { id: 3, name: 'Urban Backpack', price: '$49.99', image: 'images/product1.jpg' },
    { id: 3, name: 'Urban Backpack', price: '$49.99', image: 'images/product2.jpg' },
    { id: 3, name: 'Urban Backpack', price: '$49.99', image: 'images/product3.jpg' },
    { id: 3, name: 'Urban Backpack', price: '$49.99', image: 'images/product4.jpg' },
    { id: 3, name: 'Urban Backpack', price: '$49.99', image: 'images/product5.jpg' }
];

// Function to dynamically generate product items
function generateProductItems() {
    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="#" class="cta">Add to Cart</a>
        `;

        productGrid.appendChild(productItem);
    });
}

// Call the function to generate product items on page load
document.addEventListener('DOMContentLoaded', generateProductItems);
