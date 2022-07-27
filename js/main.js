
let carritoDeCompras = []
let modalContainer = document.getElementById('modal_container')
const openCart = document.getElementById('open')
const closeCart = document.getElementById('close')
const modalCart = document.getElementById('modalCart')
const productsContainer = document.getElementById('product-container')

openCart.addEventListener('click', ()=>{
    contenedorProductos.classList.toggle(modal-active)
})
closeCart.addEventListener('click', ()=>{
    contenedorProductos.classList.remove(modal-active)
})
contenedorProductos.addEventListener('click', ()=>{
    closeCart.click()
})
modalCart.addEventListener('click', (e)=>{
    e.stopPropagation()
})
function mostrarProductos(){
    ropa.forEach(item =>{
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML += `<div class="card">
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
        productsContainer.appendChild(div)
        const button = document.getElementById("compra")
        button.addEventListener('click', ()=>{
            cart(item.id)
            alert( `Agregaste ${ropa.nombre}`)
        })
    })
}

mostrarProductos(ropa)
