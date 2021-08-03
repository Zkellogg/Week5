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


    let orderRequest = new XMLHttpRequest()
    orderRequest.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    orderRequest.send()

    orderRequest.addEventListener('load', function(){
        const result = JSON.parse(this.responseText)
        console.log(result);
        
        const orderList = result.map(function(order){
            const orderLI = `
            <li>${order.email}</li>
            <li>${order.type}</li>
            <li>${order.size}</li>
            <li>${order.price}</li>
            
            `
            return orderLI
        })
        orderUL.innerHTML = orderList

    })


    submitButton.addEventListener('click', function() {

        const email = emailBox.value 
        const type = typeBox.value  
        const size = sizeBox.value
        const price = priceBox.value
    
        let request = new XMLHttpRequest() 
        request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
        request.setRequestHeader('Content-Type', 'application/json')
        request.addEventListener('load', function() {
            console.log(this.responseText)
            const order = JSON.parse(this.responseText)
            
            console.log(order)
        })
    const sendOrder = {
        email: email,
        type: type,
        size: size,
        price: price
    }

        request.send(JSON.stringify(sendOrder))
    })

    
    deleteButton.addEventListener("click", function(){

        const email = deleteBox.value

        let request = new XMLHttpRequest()
        request.open('DELETE', 'https://troubled-peaceful-hell.glitch.me/orders/'+ email)
        request.send()

    })

    searchButton.addEventListener("click",function(){
        const search = searchBox.value
        // const searchArray = []
        let orderRequest = new XMLHttpRequest()
        orderRequest.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders/'+ search)
        orderRequest.send()
    
        orderRequest.addEventListener('load', function(){
            const result = JSON.parse(this.responseText)
            console.log(result);
            const orderLI = `
                <li>${result.email}</li>
                <li>${result.type}</li>
                <li>${result.size}</li>
                <li>${result.price}</li>`

                orderUL.innerHTML = orderLI

            // const orderList = result.map(function(order){
                
                
            //     `
            //     return orderLI
            // })
            // 
    
            
        })
    })