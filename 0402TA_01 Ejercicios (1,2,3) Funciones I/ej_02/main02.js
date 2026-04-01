function calcularDescuento (precio, descuento){
precioConDescuento = precio - (precio * descuento / 100)
return precioConDescuento
}

resultado = calcularDescuento(100, 20);
console.log(resultado);