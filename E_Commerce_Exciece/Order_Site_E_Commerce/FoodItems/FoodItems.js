function toggleSidebar() {
  console.log("Toggle sidebar is called");
  var sideBar = document.querySelector(".sideBar");
  sideBar.classList.toggle("active");
}

let product = [
  {
    id: 1,
    image: "../Images/cupCake.jpg",
    title: "Cup Cake",
    price: 70,
  },
  {
    id: 2,
    image: "../Images/dessert-2.jpeg",
    title: "Starberry Cake",
    price: 100,
  },
  {
    id: 4,
    image: "../Images/dessert-4.jpeg",
    title: "Cup Ice Cream",
    price: 50,
  },
  {
    id: 5,
    image: "../Images/dessert-5.jpeg",
    title: "Sweet Cookie ",
    price: 70,
  },
  {
    id: 7,
    image: "../Images/burger.jpeg",
    title: "Bugar and French Fry",
    price: 140,
  },
  {
    id: 8,
    image: "../Images/bread-ambulate.jpeg",
    title: "Bred Ombulate",
    price: 70,
  },
  {
    id: 9,
    image: "../Images/fish-fry.jpeg",
    title: "Fish Fry",
    price: 90,
  },
  {
    id: 10,
    image: "../Images/noodels.jpeg",
    title: "Noodels",
    price: 140,
  },
  {
    id: 11,
    image: "../Images/briyani.jpeg",
    title: "Biriyani",
    price: 180,
  },
  {
    id: 12,
    image: "../Images/meels.jpeg",
    title: "Meels",
    price: 150,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>Rs. ${price}.00</h2>` +
      "<button onclick='addToCart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
      </div>`
    );
  })
  .join("");

var cart = [],
  count = 0;

function addToCart(a) {
  cart.push({ ...categories[a] });
  count++;
  document.getElementById("count").innerHTML = count;
  displayCart();
}
function delElement(a) {
  cart.splice(a, 1);
  count--;
  document.getElementById("count").innerHTML = count;
  displayCart();
}
function displayCart() {
  let j = 0,
    total = 0;
  if (cart.length == 0) {
    document.getElementById("cartItems").innerHTML = "Your cart is empty";
    let rupee = "&#8377;" + 0 + ".00";
    document.getElementById("total").innerHTML = rupee;
  } else {
    document.getElementById("cartItems").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total += price;
        document.getElementById("total").innerHTML = "&#8377;" + total;
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowImg' src=${image}>
                      <p >${title}</p>
                <h2 >${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i> </div><hr></div>"
        );
      })
      .join("");
  }
}
