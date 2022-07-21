
let carritoDeCompras = []
let contenedorProductos = document.getElementById('contenedor-productos')

function mostrarProductos(){
    ropa.forEach(item =>{
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                            <div class="card-image">
                                <img src=./img/${item.img}>
                                <span class="card-title">${item.nombre}</span>
                            </div>
                            <div class="card-content">
                                <p> $${item.precio}</p>
                            </div>
                            <button onClick="respuestaClick(${ropa.indexOf(item)})" id="compra">Comprar</button>
                        </div> 
                        `
        contenedorProductos.appendChild(div)
    })
}

mostrarProductos()
let comprar = document.getElementById("compra")
comprar.addEventListener("click", respuestaClick)
function respuestaClick (num){
    alert( `El total es ${ropa[num].precio}`)
}