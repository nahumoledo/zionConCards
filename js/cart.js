const shoppingCart = []
const cart = (productId) => {
    const cartContainer = document.getElementById('cart-container')
    const mostrarEnCarrito = () =>{
        let product = ropa.find(ropa => ropa.id == productId)
        shoppingCart.push(product)
        localStorage.setItem("products", JSON.stringify(shoppingCart))
        let div1 = document.createElement('div')
        div1.classList.add('productInCart')
        div1.innerHTML = `<p>${ropa.nombre}</p>
                        <p>Precio: {ropa.precio}</p>
                        <button class="btn btn-danger btn-sm" id="delete${ropa.id}">X</button>
                        `
        cartContainer.appendChild(div1)
        let buttonDelete = document.getElementById("delete${ropa.id}")
        buttonDelete.addEventListener('click', (e)=>{
            deleteProduct(e)
        })
    } 
    mostrarEnCarrito()
}
function deleteProduct(e){
    let btnClicked = e.target
    btnClicked.parentElement.remove
}