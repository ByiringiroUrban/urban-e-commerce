// Simulated product data (replace with actual data or API fetch)
const products = [
    { id: 1, name: 'Urban Jacket', price: '$79.99', image: 'images/product1.jpg', description: 'Stylish urban jacket for all seasons.', category: 'clothing', priceRange: '51-100' },
    { id: 2, name: 'Urban Sneakers', price: '$129.99', image: 'images/product2.jpg', description: 'Comfortable and trendy sneakers.', category: 'shoes', priceRange: '101-200' },
    { id: 3, name: 'Urban Backpack', price: '$49.99', image: 'images/product3.jpg', description: 'Spacious and durable backpack.', category: 'accessories', priceRange: '0-50' },
    
    { id: 1, name: 'Urban Jacket', price: '$79.99', image: 'images/product1.jpg', description: 'Stylish urban jacket for all seasons.', category: 'clothing', priceRange: '51-100' },
    { id: 2, name: 'Urban Sneakers', price: '$129.99', image: 'images/product2.jpg', description: 'Comfortable and trendy sneakers.', category: 'shoes', priceRange: '101-200' },
    { id: 3, name: 'Urban Backpack', price: '$49.99', image: 'images/product3.jpg', description: 'Spacious and durable backpack.', category: 'accessories', priceRange: '0-50' }
];

// Function to generate product items
function generateProductItems(products) {
    const productGrid = document.querySelector('.product-grid');

    // Clear existing content
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        
        // Add click event listener to open modal with product details
        productItem.addEventListener('click', () => openModal(product));

        productGrid.appendChild(productItem);
    });
}

// Function to open modal with product details
function openModal(product) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    modal.style.display = 'block';
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Close modal when clicking on the close button
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Initial call to generate product items
document.addEventListener('DOMContentLoaded', () => {
    generateProductItems(products);
});
