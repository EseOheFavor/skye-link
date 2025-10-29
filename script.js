// Sample Products
const products = [
    { name: 'Samsung Phone', price: 50000, img: 'images/samsung.jpg' },
    { name: 'SIM Pack', price: 500, img: 'images/sim.jpg' },
    { name: 'Recharge Card', price: 1000, img: 'images/recharge.jpg' },
    { name: 'CUG Line', price: 2000, img: 'images/cug.jpg' }
];

function loadProducts() {
    const container = document.getElementById('products');
    products.forEach(p => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>₦${p.price}</p><button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>`;
        container.appendChild(div);
    });
}

let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added! Cart total: ₦${cart.reduce((sum, item) => sum + item.price, 0)}`);
    // For real cart, integrate Paystack popup here (free JS from paystack.com)
}

function scrollToShop() {
    document.getElementById('shop').scrollIntoView();
}


if (document.getElementById('products')) loadProducts();
