const coupons = [
    {
        name: "january22",
        percent: 15,
    },
    {
        name: "NiceDay",
        percent: 5,
    },
    {
        name: "MyFirstDiscount",
        percent: 20,
    }
];
// Helpers
    function calculateDiscountedPrice(precio, descuento){
        const percentpriceWithDiscount = 100 - descuento;
        const priceWithDiscount = (precio * percentpriceWithDiscount) / 100;
        return priceWithDiscount;
    }
    function searchCoupon(nameCoupons, chosenCoupon){
        const validCoupon = nameCoupons.some(function(coupon){
            return coupon.name == chosenCoupon;
        });
        return validCoupon
    }
    function getDiscount(namecoupons, chosenCoupon){
        const validCoupon = namecoupons.find(function(cupon){
            return cupon.name == chosenCoupon;
        });
        return validCoupon.percent
    }

// funtions
function buttonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    if (searchCoupon(coupons, couponValue) == true){
        const discountValueCoupon = getDiscount(coupons, couponValue);
        let discount = Number(discountValue) + Number(discountValueCoupon);
        const priceWithDiscount = calculateDiscountedPrice(priceValue, discount);

        const resultP = document.getElementById("ResultDiscount");
        resultP.innerText = `Total $${priceWithDiscount}`;
    }
    else{
        const priceWithDiscount = calculateDiscountedPrice(priceValue, discountValue);

        const resultP = document.getElementById("ResultDiscount");
        resultP.innerText = `Total $${priceWithDiscount}`;
    }
}
