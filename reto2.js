const cupones = [
    {
        nombre: "enero22",
        porcentaje: 15,
    },
    {
        nombre: "DiaHermoso",
        porcentaje: 5,
    },
    {
        nombre: "MiPrimerDescuento",
        porcentaje: 20,
    }
];
function buscarCupon(nombreCupones, cuponElegido){
    const cuponValido = nombreCupones.some(function(cupon){
        return cupon.nombre == cuponElegido;
    });
    return cuponValido
}
function obtenerDescuento(nombreCupones, cuponElegido){
    const cuponValido = nombreCupones.find(function(cupon){
        return cupon.nombre == cuponElegido;
    });
    return cuponValido.porcentaje
}
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function buttonCouponDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    console.log(couponValue);

    const valido = buscarCupon(cupones, couponValue);
    
    if (valido == true){
        const discountValue = obtenerDescuento(cupones, couponValue);
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
    }
    else{
        const resultP = document.getElementById("ResultP");
        resultP.innerText = `Cupón no valido :( su precio es $${priceValue}`;
    }
}
