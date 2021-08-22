function cost(product, productCost){
    productPrice(product, productCost)
    totalPrice()
}
function memory8Gb(){
    cost('memory-8gb', 'memory-cost')
}

function memory16Gb(){
    cost('memory-16gb', 'memory-cost')
}

function storage256(){
    cost('storage-256', 'storage-cost')
}

function storage512(){
    cost('storage-512', 'storage-cost')
}

function storage1TB(){
    cost('storage-1TB', 'storage-cost')
}

function deliveryFree(){
    cost('delivery-free', 'delivery-cost')
}

function deliveryCharge(){
    cost('delivery-charge', 'delivery-cost')
}

// Product Price Function 

function productPrice(productType, productPrice){
    const memoryCost = document.getElementById(productPrice);
    const memoryPrice = document.getElementById(productType).value
    const memoryPriceNumber = parseInt(memoryPrice)
    const totalMemoryCost = memoryPriceNumber;
    return memoryCost.innerText = totalMemoryCost;
}

// Total Price Function 

function totalPrice(){
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostNumber = parseInt(memoryCost.innerText)

    const storageCost = document.getElementById('storage-cost');
    const storageCostNumber = parseInt(storageCost.innerText)

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostNumber = parseInt(deliveryCost.innerText)

    const total = document.getElementById('total-price')
    const totalPrice = 1299 + deliveryCostNumber + memoryCostNumber + storageCostNumber
    total.innerText = totalPrice

    let finalTotal = document.getElementById('final-total')
    const finalTotalPrice = totalPrice
    finalTotal.innerText = finalTotalPrice
}

// Promo Code Function 

function promoCode(){
    const promoCode = document.getElementById('promo-code').value
    const finalTotal = document.getElementById('final-total')
    const finalTotalNumber = parseFloat(finalTotal.innerText)

    document.getElementById('promo-code').value = ''

    if (promoCode == 'stevekaku') {
        return finalTotal.innerText = finalTotalNumber - (finalTotalNumber * .20)
    } else {
        alert('Invalid Promo Code')
    }
}