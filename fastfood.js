//Declaracion de variables
let edad = ''
let nombre = ''
let seleccion2 = 0
let datosInorrectos =true
let pedidoConfirmado = false
let ingreso = false
let agregarMas = true
let modificarMas = true
let TotalCostoComida = 0
let costoComida =[]
let seleccionComida = []

//Imprimo un mensaje de bienvenida
alert ('Bienvenido a fastfood online donde podras hacer tu pedido de comida de manera rápida y simple \n¡Para continuar, nos aseguraremos de que seas mayor de edad!');

while(datosInorrectos){
    // Le pidos datos al usuario para verificar y asegurarme de que sea mayor de edad
    edad = parseFloat(prompt('Ingresa tu edad'))
    nombre = prompt('¿Cual es tu nombre?')
    if ((edad < 18) || (edad === null) || (isNaN(edad)) || (!isNaN(nombre))){
        alert('Debes agregar un valor válido')
    datosInorrectos=true
    }else{
        datosInorrectos=false
        ingreso = true;
    }
}

function comidaSeleccionada() {
    //Esta funcion mustra el menu y permite seleccionar los platos que desea consumir
    let agregarMas= true
    while (agregarMas){
        
        seleccion2 = parseFloat(prompt('Estas son las opciones disponibles: \n Por favor selecciona una opcion \n1. Hamburguesa clasica con papas fritas      ... AR$ 8000 \n2. Hamburguesa especial con papas fritas      ... AR$ 12000 \n3. Pancho con papas fritas      ... AR$ 4000 \n4. Pizza Muzzarella      ... AR$ 10000 \n5. Pizza especial      ... AR$ 15000 '))
        switch (seleccion2){
            case 1:
                seleccionComida.push('Hamburguesa clasica con papas fritas')
                TotalCostoComida = TotalCostoComida + 8000
                costoComida.push(8000)
                
            break
            case 2:
                seleccionComida.push('Hamburguesa especial con papas fritas')
                TotalCostoComida = TotalCostoComida + 12000
                costoComida.push(12000)
            break
            case 3:
                seleccionComida.push('Pancho con papas fritas')
                TotalCostoComida = TotalCostoComida + 4000
                costoComida.push(4000)
            break
            case 4:
                seleccionComida.push('Pizza Muzzarella')
                TotalCostoComida = TotalCostoComida + 10000
                costoComida.push(10000)
            break
            case 5:
                seleccionComida.push('Pizza especial')
                TotalCostoComida = TotalCostoComida + 15000
                costoComida.push(15000)
            break
            default:
            alert('Debes agregar un valor válido')
            break
            //falta agregar adicionales
        }
        agregarMas = confirm("¿Deseas agregar algo más?")
    }  
}

function modificarPedido(){
    //Esta funcion permite eliminar alguna de las opciones antes escogidas y modifica el costo
    while ((modificarMas) && (seleccionComida.length>1)) {
        let listaSeleccionado2 = ''
        for (let i = 0; i < seleccionComida.length ; i++){
            listaSeleccionado2 += `\n ${i+1}. ${seleccionComida[i]}`
        } 
        seleccion2 = parseInt(prompt(('Puedes eliminar alguna de las opciones seleccionadas. \nPor favor, ingresa un numero:'+listaSeleccionado2)))
        seleccionComida.splice(seleccion2-1, 1)
        TotalCostoComida = TotalCostoComida - parseInt(costoComida[seleccion2-1])
        costoComida.splice(seleccion2-1, 1)
        alert ('Tu pedido ha sido modificado, por favor revisalo en la opcion 3 del menu principal' )
        modificarMas = confirm("¿Deseas quitar algo más?")
    }
    if ((seleccionComida.length=1)){
        alert('¡Para eliminar alguno por lo menos deberias haber escogido dos platos!')
    }       
} 

function mostrarSeleccion() {
    //esta funcion crea una lista con las opciones escogidas del menu
    let listaSeleccionado = ''
    for (let i = 0; i < seleccionComida.length ; i++){
            listaSeleccionado += `\n ${i+1}. ${seleccionComida[i]}`
    }
    return (listaSeleccionado) 
}

const ConfirmarPedido=()=>{
    //esta funcion permite confirmar el pedido 
    let deacuerdo =false
    deacuerdo = confirm('¡Gracias por tu pedido! \n Te mostramos los detalles : \n Seleccionaste estas opciones :' +mostrarSeleccion()+ '\n El total a pagar es: $AR '+TotalCostoComida+'\n  ¿estas de acuerdo?')
    if (deacuerdo) {
        alert('Tu pedido fue agendado con éxito, te notificaremos cuando esté listo \n Gracias por escogernos')
    }
}

const SeleccionMenuPrincipalpal=()=>{
    // Esta funcion muestra las opciones disponibles de las cosas que se pueden hacer en la web
    let seleccion1 = prompt('Bienvenido '+nombre+ ' \n Por favor, introduzca un número de acurdo a las siguientes opciones: \n 1. Escoger algo del menu \n 2. Modificar pedido \n 3. Tu pedido y total a pagar \n 4. Confirmar pedido')
    return parseInt(seleccion1)
}

const selector=(seleccion1)=>{
    //este switch permite ejecutar las funciones correspondiente a la eleccion del menu principal
    switch(seleccion1){
        case 1:
            comidaSeleccionada()
            mostrarSeleccion()
        break  
        case 2:
            modificarPedido() 
        break
        case 3:
            alert('Seleccionaste estas opciones:'+mostrarSeleccion()+'\n El total a pagar es: $AR '+TotalCostoComida)
        break
        case 4:
            ConfirmarPedido()
        break
        default:
            alert('Debes agregar un valor válido')
    }  
}

const correr=()=>{
    //funcion para volver al menu principal
    if(ingreso){
        let repetir = true
        do{
            selector(SeleccionMenuPrincipalpal())
            repetir = confirm("¿Desea continuar?")
        } while(repetir)
    }
}

correr()