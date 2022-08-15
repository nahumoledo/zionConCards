const shoppingCart = []
const cartContainer = document.getElementById('cart-container')



const cart = (productId) => {
    let product = stockRopa[productId]
    shoppingCart.push(product)
    mostrarEnCarrito()
    Toastify({
        text: "Agregaste este producto a tu carrito",
        className: "info",
        duration: 1500,
        style: {
          background: "cian",
        }
      }).showToast()
}

function deleteProduct(id) {
    shoppingCart.splice(id, 1)
    mostrarEnCarrito()
    Toastify({
        text: "Eliminaste este producto de tu carrito",
        className: "info",
        duration: 1500,
        style: {
          background: "cian",
        }
      }).showToast()
}


const mostrarEnCarrito = () => {
    cartContainer.innerHTML = ''

    shoppingCart.forEach(prod => {
      let div1 = document.createElement('div')
        div1.classList.add('productInCart')
        div1.innerHTML = `<p>${prod.nombre}</p>
                    <p>Precio: ${prod.precio}</p>
                    <button class="btn btn-danger btn-sm" id="delete" onClick=deleteProduct(${shoppingCart.indexOf(prod)})>X</button>
                    `
        cartContainer.appendChild(div1)
    });
    localStorage.setItem('products', JSON.stringify(shoppingCart))
}