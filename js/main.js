
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
                            <button id="compra">Comprar</button>
                        </div> 
                        `
        contenedorProductos.appendChild(div)
    })
}

mostrarProductos()
let comprar = document.getElementById("compra")
comprar.addEventListener("click", respuestaClick)
let total = 'El total es ${item.precio}'
function respuestaClick (){
    alert(total)
}