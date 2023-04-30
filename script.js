// Seat counter increment & decrement function 
function seatCounter(id, status) {
    let seatCount = document.getElementById(id).value;
    let seatCountNumber = parseFloat(seatCount);

    if(status) {
        seatCountNumber += 1;
        document.getElementById(id).value = seatCountNumber;
    }
    else {
        if(seatCountNumber > 0) {
            seatCountNumber -= 1;
            document.getElementById(id).value = seatCountNumber;
        }
    }
    return seatCountNumber;
}

// First Class Amount calculation 
function amountCalculationFirstClass(id1, id2, id3, id4, id5) {
    let economySeatCount = document.getElementById(id1).value;
    let economySeatCountNumber = parseFloat(economySeatCount);
    let subTotalAmount = (150 * id2) + (economySeatCountNumber * 100);
    document.getElementById(id3).innerText = subTotalAmount;
    let vatAmount = subTotalAmount * 0.1;
    document.getElementById(id4).innerText = vatAmount;
    let totalAmount = subTotalAmount + vatAmount;
    document.getElementById(id5).innerText = totalAmount;
}


// First class increment button 
let incrementBtnFirstClass = document.getElementById('incrementBtnFirstClass');
incrementBtnFirstClass.addEventListener('click', () => {
    let seatCountNumber =  seatCounter('firstClassSeatCount', true);
    amountCalculationFirstClass('economySeatCount', seatCountNumber, 'subTotalAmount', 'vatAmount', 'totalAmount');    
});

// First class decrement button 
let decrementBtnFirstClass = document.getElementById('decrementBtnFirstClass');
decrementBtnFirstClass.addEventListener('click', () => {
    let seatCountNumber = seatCounter('firstClassSeatCount', false);
    amountCalculationFirstClass('economySeatCount', seatCountNumber, 'subTotalAmount', 'vatAmount', 'totalAmount');
});


// Economy Amount calculation 
function amountCalculationEconomy(id1, id2, id3, id4, id5) {
    let firstClassSeatCount = document.getElementById(id1).value;
    let firstClassSeatCountNumber = parseFloat(firstClassSeatCount);
    let subTotalAmount = (100 * id2) + (150 * firstClassSeatCountNumber);
    document.getElementById(id3).innerText = subTotalAmount;
    let vatAmount = subTotalAmount * 0.1;
    document.getElementById(id4).innerText = vatAmount;
    let totalAmount = subTotalAmount + vatAmount;
    document.getElementById(id5).innerText = totalAmount;
    return totalAmount;
}

// Economy increment button 
let incrementBtnEconomy = document.getElementById('incrementBtnEconomy');
incrementBtnEconomy.addEventListener('click', () => {
    let seatCountNumber = seatCounter('economySeatCount', true);
    amountCalculationEconomy('firstClassSeatCount', seatCountNumber, 'subTotalAmount', 'vatAmount', 'totalAmount');
});

// Economy decrement button 
let decrementBtnEconomy = document.getElementById('decrementBtnEconomy');
decrementBtnEconomy.addEventListener('click', () => {
    let seatCountNumber = seatCounter('economySeatCount', false);
    amountCalculationEconomy('firstClassSeatCount', seatCountNumber, 'subTotalAmount', 'vatAmount', 'totalAmount');
});