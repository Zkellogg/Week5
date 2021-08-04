const orderUL = document.getElementById("orderUL")
const emailBox = document.getElementById("emailBox")
const typeBox = document.getElementById("typeBox")
const sizeBox = document.getElementById("sizeBox")
const priceBox = document.getElementById("priceBox")
const submitButton = document.getElementById("submitButton")
const deleteButton = document.getElementById("deleteButton")
const deleteBox = document.getElementById("deleteBox")
const searchBox = document.getElementById("searchBox")
const searchButton = document.getElementById("searchButton")

const GET_ORDERS_URL = 'https://troubled-peaceful-hell.glitch.me/orders'


function getAllOrders(ordersDownloaded){

    fetch(GET_ORDERS_URL)
    .then(responce => {
        return responce.json()
    })
    .then(result => {
        ordersDownloaded(result)
    })
}

getAllOrders((orders) => {
    console.log(orders);
    displayAllOrders(orders)
})

function displayAllOrders(orders){

    const orderList = orders.map(function(order){
        const orderLI = `
        <li>${order.email}</li>
        <li>${order.type}</li>
        <li>${order.size}</li>
        <li>${order.price}</li>
        
        `
        return orderLI
    })
    orderUL.innerHTML = orderList
}

function createOrder(){

        const email = emailBox.value 
        const type = typeBox.value  
        const size = sizeBox.value
        const price = priceBox.value

    fetch(GET_ORDERS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
                email: email,
                type: type,
                size: size,
                price: price
            
        })
      })

}

submitButton.addEventListener('click', function(){
    createOrder()
})













