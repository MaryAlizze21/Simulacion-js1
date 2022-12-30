//DE COMPRAS
//CALCULO DEL MONTO TOTAL DE LA COMPRA ELEGIDOS

do{

//PRODUCTOS:
//Precio y Cantidad de una blusa
let blusaPrecio = Number(prompt("Blusa: Precio por unidad"))
let blusaCantidad = Number(prompt("Número de blusas"))
//Precio y Cantidad de un pantalón
let pantalonPrecio = Number(prompt("Pantalón: Precio por unidad"))
let pantalonCantidad = Number(prompt("Número de pantalones"))
//Precio y Cantidad de los zapatos
let zapatosPrecio = Number(prompt("Zapatos: Precio por unidad"))
let zapatosCantidad = Number(prompt("Número de pares de zapatos"))


//MONTO SIN IGV
function sumaPQ(blusaPrecio=0, pantalonPrecio=0, zapatosPrecio=0, blusaCantidad=0, pantalonCantidad=0, zapatosCantidad=0){
    return (blusaPrecio * blusaCantidad) + (pantalonPrecio * pantalonCantidad) + (zapatosPrecio * zapatosCantidad)
} 
let costoSinIgv = sumaPQ(blusaPrecio, pantalonPrecio, zapatosPrecio, blusaCantidad, pantalonCantidad, zapatosCantidad)
alert(costoSinIgv)


//MONTO CON IGV 
//IGV PERU: 18%
const calcularIgv = totalSinIgv => totalSinIgv * 0.18
let igvCompra = calcularIgv(costoSinIgv)
alert(igvCompra)
const sumarIgv = (costoSinIgv, igvCompra) => costoSinIgv + igvCompra
let costoConIgv = sumarIgv(costoSinIgv, igvCompra)
alert(costoConIgv)


//DESCUENTO POR METODO DE PAGO 
//Pago en efectivo: descuento de 50 soles
//pago por tarjeta: interes de 25 soles
const tipoDePago = (opciones, pagoEnEfectivo, pagoEnTarjeta) => {
    switch (opciones){
        case "1":
            return alert(("Recibiste un descuento de 50 soles por pagar en efectivo") + (pagoEnEfectivo - 50))
        
        case "2":
            return alert(("Se te adicionara un interes de 25 soles por pagar con tarjeta") + (pagoEnTarjeta + 25))
        
        default:
            return alert("Error, no se pudo calcular el descuento")
    }
}
let costoDesc = prompt("Ingresa el tipo de pago, si el pago se hace en efectivo tendra un descuento de 50 soles, y si el pago se hace con tarjeta se le adicionara un cargo de 25 soles. \n 1 pago en efectivo \n 2 pago con tarjeta")
tipoDePago(costoDesc, costoConIgv, costoConIgv)

//CORREGIR METODO DE ENTREGA
//Delivery o recojo en tienda
// Recojo en tienda: Sin costo adicional
// entrega a domicilio: costo adicional de 7 soles
const tipoEntrega = (opcion, cdelivery, rtienda) => {
    switch (opcion){
        case "1":
            return alert(("Seleccionaste entrega a domicilio") + (cdelivery + 7))
        
        case "2":
            return alert(("Seleccionaste recojo en tienda") + (rtienda + 0))
        
        default:
            return alert("Error")
    }
}
let costoFinalCompra = prompt("Selecciona la forma de entrega de tus productos, si desea que la entrega se realize en su domicilio se hara efectivo un cobro adicional de 7 soles. \n 1 Entrega a domicilio \n 2 Recojo en tienda")
tipoEntrega(costoFinalCompra, costoDesc)

}while(confirm("Quiere seguir comprando")){

}
alert("Gracias por comprar con nosotros")