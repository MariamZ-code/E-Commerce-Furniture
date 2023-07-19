let cartcounter=0;
let cartnav= document.getElementById('cartNav');

function addCart(){
    cartcounter++;
    cartNav.style.display='block';
cartnav.innerHTML=`${cartcounter}`;
}


let myCat = document.getElementById("myCat");
let catOp = document.getElementById("catOptions");


let allCat = document.getElementById("allCat");
let chair = document.getElementById("chair");
let light = document.getElementById("light");
let acce = document.getElementById("acce");
let corner = document.getElementById("corner");

let chairProd = document.getElementById("chair1");
let accessProd = document.getElementById("access1");
let lightPro = document.getElementById("light1");


let chairProd2 = document.getElementById("chair2");
let accessProd2 = document.getElementById("access2");
let lightProd2 = document.getElementById("light2");

let chairProd3 = document.getElementById("chair3");
let accessProd3 = document.getElementById("access3");
let lightProd3 = document.getElementById("light3");

let gchair= document.getElementById("gchair");
let bchair= document.getElementById("bchair");

let ychair= document.getElementById("ychair");


let chairProddd = document.getElementsByClassName("chair1");
let accessProddd = document.getElementsByClassName("access1");
let lightProddd = document.getElementsByClassName("light1");
let cornerProd= document.getElementById("cornerProd");


myCat.addEventListener('click', () => {

    catOp.classList.toggle("catOpTion");

})


allCat.addEventListener('click', () => {
    accessProd.style.display = 'block'
    lightPro.style.display = 'block'
    accessProd2.style.display = 'block'
    lightProd2.style.display = 'block'
    accessProd3.style.display = 'block'
    lightProd3.style.display = 'block'
    gchair.style.display = 'block'
    ychair.style.display = 'block'
    bchair.style.display = 'block'
})

chair.addEventListener('click', () => {
    accessProd.style.display = 'none'
    lightPro.style.display = 'none'
    accessProd2.style.display = 'none'
    lightProd2.style.display = 'none'
    accessProd3.style.display = 'none'
    lightProd3.style.display = 'none'
    gchair.style.display = 'none'
    ychair.style.display = 'none'
    bchair.style.display = 'none'
})
light.addEventListener('click', () => {
    lightProd3.style.display = 'block'
    lightProd2.style.display = 'block'
    lightPro.style.display = 'block'

    accessProd.style.display = 'none'
    chairProd.style.display = 'none'
    accessProd2.style.display = 'none'
    chairProd2.style.display = 'none'
    accessProd3.style.display = 'none'
    chairProd3.style.display = 'none'
    gchair.style.display = 'none'
    ychair.style.display = 'none'
    bchair.style.display = 'none'

})
acce.addEventListener('click', () => {
    lightProd3.style.display = 'none'
    lightProd2.style.display = 'none'
    lightPro.style.display = 'none'

    accessProd.style.display = 'block'
    chairProd.style.display = 'none'
    accessProd2.style.display = 'block'
    chairProd2.style.display = 'none'
    accessProd3.style.display = 'block'
    chairProd3.style.display = 'none'
    gchair.style.display = 'none'
    ychair.style.display = 'none'
    bchair.style.display = 'none'


})
corner.addEventListener('click', () => {
    lightProd3.style.display = 'none'
    lightProd2.style.display = 'none'
    lightPro.style.display = 'none'

    accessProd.style.display = 'none'
    chairProd.style.display = 'none'
    accessProd2.style.display = 'none'
    chairProd2.style.display = 'none'
    accessProd3.style.display = 'none'
    chairProd3.style.display = 'none'

    gchair.style.display = 'block'
    ychair.style.display = 'block'
    bchair.style.display = 'block'
})












// let products = [
//         {
//             pName: "Vasa",
//             imgSrc: "../img/collection/acce1.jpg",
//             price: "100$",
//             category: "access"
//         },
//         {
//             pName: "Wood Chair",
//             imgSrc: "../img/collection/chair1.jpg",
//             price: "250$",
//             category: "chair"
//         },
//         {
//             pName: "Modern Light",
//             imgSrc: "../img/collection/L1.jpg",
//             price: "250$",
//             category: "light"
//         },
//         {
//             pName: "Vasa",
//             imgSrc: "../img/collection/acce1.jpg",
//             price: "100$",
//             category: "access"
//         },
//         {
//             pName: "Wood Chair",
//             imgSrc: "../img/collection/chair1.jpg",
//             price: "250$",
//             category: "chair"
//         },
//         {
//             pName: "Modern Light",
//             imgSrc: "../img/collection/L1.jpg",
//             price: "250$",
//             category: "light"
//         },
// ]
// for (const product of products) {
//     const productElement = document.createElement("div");
//     productElement.classList.add("col-4");
//     const productCard = document.createElement("div");
//     productCard.classList.add("row");

//     productElement.appendChild(productCard)
//     let col= document.createElement('div')
//     col.classList.add('col-10' ,`offser-2` , `mb-5`)
//     productCard.appendChild(col)
//     let card= document.createElement('div')
//     card.classList.add('card')
//     card.style.border="none !important;"

//     // create img
//     let img = document.createElement('img');
//     img.classList.add('card-img-top');
//     img.setAttribute('src', product.imgSrc);
//     card.appendChild(img )


//     // create title And price
//     let cardBody= document.createElement('div')
//     cardBody.classList.add('card-body')
//     let rowBody= document.createElement('div')
//     rowBody.classList.add('row' ,'mt-2')
//     let colBody= document.createElement('div');
//     colBody.classList.add('col-8');
//     let title= document.createElement('h5')
//     title.classList.add('card-title')
//     title.innerHTML= product.pName
//     colBody.appendChild(title)
//     let colprice= document.createElement('div');
//     colprice.classList.add('col-3', 'offset-1' ,'text-end')
//     let p= document.createElement('p')
//     p.innerHTML= product.price;
//     colprice.appendChild(p);
//     // colBody.appendChild(title);
//     rowBody.appendChild(colBody);
//     rowBody.appendChild(colprice)
//     cardBody.appendChild(rowBody)
//     card.appendChild(cardBody)


//     col.appendChild(card)
//    document.getElementById('products').appendChild(productCard)

// }
