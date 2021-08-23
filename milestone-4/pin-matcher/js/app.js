function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log("get 3 digit pin and return agen function", pin);
        return getPin()
    }

}

function pinGanarat() {
    const pin = getPin();
    const result = getPin(pin)
    document.getElementById("generatInput").value = result
    console.log(result);
}

// keypad action 
document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("calInput");
    if (isNaN(number)) {
        console.log(number);
        if (number == "C") {
            calcInput.value = ''
        }
    } else {
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }

})

// veryfly pin 
function verifypin() {
    const pin = document.getElementById("generatInput").value;
    const typeNumber = document.getElementById("calInput").value
    const successMessage = document.getElementById("notify-success");
    const errorMessage = document.getElementById("notify-faild");
    if (pin == typeNumber) {
        successMessage.style.display = "block"
        errorMessage.style.display = "none"

    } else {
        errorMessage.style.display = "block"
        successMessage.style.display = "none"

    }


}