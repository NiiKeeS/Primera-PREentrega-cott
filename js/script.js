let VALOR_TOTAL= 350000
let subtotal= 350000
const PORCENTAJE_AUMENTO_3CUOTAS = 5
const PORCENTAJE_AUMENTO_6CUOTAS = 10
const PORCENTAJE_AUMENTO_12CUOTAS = 15
let dniUsuario = ""
let direccionUsuario = ""
let telContactoUsuario = ""

 const NOMBRE_USUARIO = prompt("Bienvenido. Ingrese su nombre por favor")
alert("Hola " + NOMBRE_USUARIO + "! ¿Como estas? precio final del carrito: $350.000")
alert("Para finalizar, te tomaremos un par de datos para realizar el envío correctamente:")


 dniUsuario = prompt("¿Cómo es tu número de documento?") 

direccionUsuario = prompt("¿Cómo es tu dirección de entrega?")

telContactoUsuario = prompt("¿Cúal es tu número telefónico de contacto?")


function calcularValorFinal(subtotal, cuotas) {
    let valorFinal
    let montoAgregado
    switch (cuotas) {
        case "1":
            valorFinal = subtotal
            return valorFinal
        case "3":
            montoAgregado = (subtotal * PORCENTAJE_AUMENTO_3CUOTAS) / 100
            valorFinal = subtotal + montoAgregado
            return valorFinal
        case "6":
            montoAgregado = (subtotal * PORCENTAJE_AUMENTO_6CUOTAS) / 100
            valorFinal = subtotal + montoAgregado
            return valorFinal
        case "12":
            montoAgregado = (subtotal * PORCENTAJE_AUMENTO_12CUOTAS) / 100
            valorFinal = subtotal + montoAgregado
            return valorFinal
    }
}
function calcularValorPorCuota(valorFinal, cuotas) {
    return (valorFinal / parseInt(cuotas))
}


    let cuotasElegidas = prompt("Elija la cantidad de cuotas con las que desea abonar el pedido." + "\n" + "1 cuota: 0% de interés" + "\n" + "3 cuotas: " + PORCENTAJE_AUMENTO_3CUOTAS + "% de interés" + "\n" + "6 cuotas: " + PORCENTAJE_AUMENTO_6CUOTAS + "% de interés" + "\n" + "12 cuotas: " + PORCENTAJE_AUMENTO_12CUOTAS + "% de interés")
    while ((cuotasElegidas != "1") && (cuotasElegidas != "3") && (cuotasElegidas != "6") && (cuotasElegidas != "12")) {
        alert("valor incorrecto, ingrese cantidad de cuotas nuevamente (1, 3, 6 o 12)")
        cuotasElegidas = prompt("Elija la cantidad de cuotas con las que desea abonar el pedido." + "\n" + "1 cuota: 0% de interés" + "\n" + "3 cuotas: " + PORCENTAJE_AUMENTO_3CUOTAS + "% de interés" + "\n" + "6 cuotas: " + PORCENTAJE_AUMENTO_6CUOTAS + "% de interés" + "\n" + "12 cuotas: " + PORCENTAJE_AUMENTO_12CUOTAS + "% de interés")
    }

    const VALOR_FINAL_A_PAGAR = calcularValorFinal(subtotal, cuotasElegidas)
    const VALOR_FINAL_POR_CUOTA = calcularValorPorCuota(VALOR_FINAL_A_PAGAR, cuotasElegidas)
   alert("Pedido realizado con éxito. Usted pagará un total de $" + VALOR_FINAL_A_PAGAR + " en " + cuotasElegidas + " cuotas, y tendrá que abonar un total de $" + VALOR_FINAL_POR_CUOTA + " por cuota. Muchas gracias por su compra!")
   
