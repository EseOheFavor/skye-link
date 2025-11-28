// Existing code... (keep products array as is)

// Add Lumos Products
const lumosProducts = [
    { name: 'Lumos L1 - 12 Month Plan', price: 100000, img: 'images/lumos-l1.jpg' }, // Initial + first monthly est.
    { name: 'Lumos L1 - 18 Month Plan', price: 100000, img: 'images/lumos-l1.jpg' },
    { name: 'Lumos L1 - 24 Month Plan', price: 100000, img: 'images/lumos-l1.jpg' },
    { name: 'Lumos L1 Outright', price: 525000, img: 'images/lumos-l1.jpg' }
];

// Updated loadProducts() to handle Lumos
function loadProducts(containerId = 'products', isLumos = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const items = isLumos ? lumosProducts : products;
    items.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `
            <img src="$$ {p.img}" alt=" $${p.name}" style="width:200px; height:150px;">
            <h3>${p.name}</h3>
            <p>₦${p.price.toLocaleString()} (Initial)</p>
            <button onclick="addToCart('${p.name}', ${p.price})">Buy Now</button>
        `;
        container.appendChild(div);
    });
}

// Call for Lumos page
if (document.getElementById('lumos-products')) loadProducts('lumos-products', true);

// Rest of existing code (Paystack, etc.)

function closeBanner() {
    document.getElementById('convocation-banner').style.display = 'none';
}
// Auto-hide after 15s
setTimeout(closeBanner, 15000);
