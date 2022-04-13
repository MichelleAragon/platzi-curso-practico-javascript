const coupons = [
  {
    name: "ASDFG",
    discount: 50,
  },
  {
    name: "QWERT",
    discount: 25,
  },
  {
    name: "ZXCVB",
    discount: 10,
  },
];

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value.toUpperCase();

  if (coupons.findIndex((coupon) => coupon.name === couponValue) === -1) {
    throw new Error("not valid coupon");
  }

  const selectedCoupon = coupons.find((coupon) => coupon.name === couponValue);
  const priceWithDiscount = priceValue - (priceValue * selectedCoupon.discount / 100)

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + priceWithDiscount;
}
