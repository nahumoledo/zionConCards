const shoppingCart = []
const cartContainer = document.getElementById('cart-container')



const cart = (productId) => {
    let product = ropa[productId]
    shoppingCart.push(product)
    mostrarEnCarrito()
}

function deleteProduct(id) {
    shoppingCart.splice(id, 1)
    console.log(shoppingCart)
    cartContainer.innerHTML = ""
    mostrarEnCarrito()
}


const mostrarEnCarrito = () => {

    let div1 = document.createElement('div')
    
    shoppingCart.forEach(prod => {

        div1.classList.add('productInCart')
        div1.innerHTML = `<p>${prod.nombre}</p>
                    <p>Precio: ${prod.precio}</p>
                    <button class="btn btn-danger btn-sm" id="delete" onClick=deleteProduct(${shoppingCart.indexOf(prod)})>X</button>
                    `
        cartContainer.appendChild(div1)
    });

}