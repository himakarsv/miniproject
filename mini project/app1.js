let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let overview=document.querySelector('.overview');
let carts=document.querySelector(".carts");

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        name: 'ONION',
        image: 'ONION.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'TOMATO',
        image: 'TOMATO.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'BRINJAL',
        image: 'BRINJAL.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'OKRA',
        image: 'OKRA.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'DRUMSTICK',
        image: 'DRUMSTICKS.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'CARROT',
        image: 'CARROT.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'RICE',
        image: 'RICE.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'WHEAT',
        image: 'WHEAT.jpg',
        price: 120000
    },
    {
        id: 9,
        name: 'BARLEY',
        image: 'BARLEY.jpg',
        price: 220000
    },
    {
        id: 10,
        name: 'CORN',
        image: 'CORN.jpg',
        price: 123000
    },
    {
        id: 11,
        name: 'SORGHUM',
        image: 'SORGHUM.jpg',
        price: 320000
    },
    {
        id: 12,
        name: 'KAMUT',
        image: 'KAMUT.jpg',
        price: 120000
    },
    {
        id: 13,
        name: 'APPLE',
        image: 'APPLE.jpg',
        price: 120000
    },
    {
        id: 14,
        name: 'BANANA',
        image: 'BANANA.jpg',
        price: 120000
    },
    {
        id: 15,
        name: 'GUAVA',
        image: 'GUAVA.jpg',
        price: 220000
    },
    {
        id: 16,
        name: 'POMEGRANATE',
        image: 'POMEGRANATE.jpg',
        price: 123000
    },
    {
        id: 17,
        name: 'PAPAYA',
        image: 'PAPAYA.jpg',
        price: 320000
    },
    {
        id: 18,
        name: 'GRAPES',
        image: 'GRAPES.jpg',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="images"><img src="image/${value.image}"></div>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    console.log(listCards);
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    console.log(listCards);
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
    console.log(listCards);
}
function fun(){
    if(listCards.length==0)
    {
        Swal.fire({
            icon: 'error',
            title: 'No items added',
            text: 'Pleaseadd items!',
            button: 'Okay',
            footer: '<a href="about.html">Any issue?</a>'
          })
    }
    else{
        // var total = 0;
        // for (var i = 0; i < listCards.length; i++) {
        //     let newone=document.createElement('div');
        //     newone.classList.add("super");
        //     newone.innerHTML=`
        //     <img src="image/${listCards[i].image}"/>
        //     <h4>Item name - ${listCards[i].name}</h4>
        //     <h4>Quantity - ${listCards[i].quantity}</h4>
        //     <h4>Price - ${listCards[i].price}</h4>
        //     `;
        //     carts.appendChild("newone");
        // }
        Swal.fire({
            icon: 'success',
            title: 'Thank You🙏',
            text: 'Your order has been placed!',
            button : 'Okay',
            footer: '<a href="about.html">Any issue?</a>'
          })
    }

   
}
