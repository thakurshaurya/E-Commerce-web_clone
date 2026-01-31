const cartBtn = document.querySelector("#Cartbtn");
const cartQnt = document.querySelector(".cart-count");

const CART_KEY = "cartCount";

// Load cart count on EVERY page
let val = Number(sessionStorage.getItem(CART_KEY)) || 0;

if (cartQnt) {
  cartQnt.innerText = val;
}

// Only attach click handler if button exists
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    val += 1;
    sessionStorage.setItem(CART_KEY, val);

    if (cartQnt) {
      cartQnt.innerText = val;
    }
  });
}

