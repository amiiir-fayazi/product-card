/* Variables */
const quantityIncreaseBtn = document.querySelector(
  ".product-card__quantity-btn--increase"
);
const quantityDecreaseBtn = document.querySelector(
  ".product-card__quantity-btn--decrease"
);
const quantityText = document.querySelector(".product-card__quantity-value");
const discountInfo = document.querySelector(".product-card__discount-info");
const discountInfoOpenBtn = document.querySelector(
  ".product-card__discount-btn"
);
const discountInfoHideBtn = document.querySelector(
  ".product-card__discount-btn--open"
);
const discountBtn = document.getElementById("discount-close-btn"); 
const discountModal = document.querySelector(".discount-modal__content"); 
const card = document.querySelector(".product-card");
const overlay = document.getElementById("overlay");

const minQuantity = 1; 
const MaxQuantity = 10; 

/* Functions */
function updateQuantity(isIncrease) {
  let quantity = Number(quantityText.textContent);
  if (isIncrease) {
    if (quantity < MaxQuantity) {
      quantity++;
    }
  } else {
    if (quantity > minQuantity) {
      quantity--;
    }
  }
  quantityText.textContent = quantity;
}
function toggleDisplay() {
  discountModal.classList.toggle("show");
  card.classList.toggle("blur");
  overlay.classList.toggle("active");
}
/* Events */
quantityIncreaseBtn.addEventListener("click", () => updateQuantity(true));
quantityDecreaseBtn.addEventListener("click", () => updateQuantity(false));
discountBtn.addEventListener("click", toggleDisplay);
