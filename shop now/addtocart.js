const product = [
    {
        id: 0,
        image: 'image/m1.jpg',
        title: "Men's Polo Shirt / White",
        price: 49,
    },
    {
        id: 1,
        image: 'image/m2.jpg',
        title: "Men's Short / Gray",
        price: 39,
    },
    {
        id: 2,
        image: 'image/m3.jpg',
        title: "Men's Polo Shirt / Black",
        price: 49,
    },
    {
        id: 3,
        image: 'image/m4.jpg',
        title: "Men's Polo Shirt / White & Brown",
        price: 49,
    },
    {
        id: 4,
        image: 'image/s1.jpeg',
        title: "Air Jordan 1 Mid / Blue & Black",
        price: 250,
    },
    {
        id: 5,
        image: 'image/s2.jpeg',
        title: "Air Jordan 1 Low / White & Brown",
        price: 240,
    },
    {
        id: 6,
        image: 'image/wm1.jpg',
        title: "Women's Dress / Black",
        price: 49,
    },
    {
        id: 7,
        image: 'image/wm2.jpg',
        title: "Women's Dress / White",
        price: 49,
    },
    {
        id: 8,
        image: 'image/wm3.jpg',
        title: "Women's Tops / Black",
        price: 49,
    }
];

const categories = [...new Set(product.map((item) => item))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}
