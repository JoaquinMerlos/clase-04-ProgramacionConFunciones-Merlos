let precioRemera = 2600
let precioCampera = 4500
let precioBuzo = 7900

let sumaCompra = 0

let volverAComprar = "si"

function compra(){ 

    while (volverAComprar == "si"){ 

        remera = prompt ("REMERA precio: $2600. Para agregar al carrito escriba 'si', para continuar a la próxima prenda, escriba 'siguiente':")
        campera = prompt ("CAMPERA precio: $4500. Para agregar al carrito escriba 'si', para continuar a la próxima prenda, escriba 'siguiente':")
        buzo= prompt ("BUZO precio: $7900. Para agregar buzo al carrito escriba 'si', para finalizar, escriba 'listo'.")  

        if(remera== "si" && campera =="siguiente" && buzo == "listo"){
            sumaCompra = precioRemera
            volverAComprar = "no"
        }
            
        else if(campera == "si" && remera =="siguiente" && buzo == "listo") {
            sumaCompra = precioCampera
            volverAComprar = "no"
        }

        else if (buzo =="si" && remera =="siguiente" && campera == "siguiente"){
            sumaCompra = precioBuzo
            volverAComprar = "no"
        }
    
        else if (remera == "si" && campera == "si" && buzo == "si"){
            sumaCompra = precioBuzo + precioCampera + precioRemera
            volverAComprar = "no"
        }
        else if (remera == "si" && campera == "si" && buzo == "listo"){
            sumaCompra = precioRemera + precioCampera
            volverAComprar = "no"
        }

        else if (remera == "si" && buzo == "si" && campera =="siguiente"){
            sumaCompra = precioRemera + precioBuzo
            volverAComprar = "no"
        }

        else if(campera == "si" && buzo == "si" && remera == "siguiente"){
            sumaCompra =precioCampera + precioBuzo
            volverAComprar = "no"
        }
        else {
         volverAComprar = prompt ("No se ha seleccionado ninguna prenda, si desea volver a seleccionar, escriba 'si', para salir, escriba 'no'")
        }
        
    }
console.log("El total a pagar es: $",sumaCompra)
}

compra();