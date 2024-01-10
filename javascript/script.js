let convert_button = document.getElementById("convert_button");
let currency_from = document.getElementById("currency_from");
let currency_to = document.getElementById("currency_to");
let currency_amount = document.getElementById("currency_rate_amount");


currency_from.addEventListener("change",function(){
    currency_amount.innerHTML = `${currency_from.value} to ${currency_to.value}`
})

currency_to.addEventListener("change",function(){
    currency_amount.innerHTML = `${currency_from.value} to ${currency_to.value}`
})

convert_button.addEventListener("click",function(){
    let amount = document.getElementById("amount_input").value;
    // window.alert(amount);

    switch(true){
        case (currency_from.value == "INR" && currency_to.value == "INR") : 
        currency_amount.innerHTML = `INR ${amount}`;
        break;

        case (currency_from.value == "INR" && currency_to.value == "USD") : 
        amount = amount*.012;
        currency_amount.innerHTML = `USD ${amount}`;
        break;

        case (currency_from.value == "USD" && currency_to.value == "INR") : 
        amount = amount*83.11;
        currency_amount.innerHTML = `INR ${amount}`;
        break;

        case (currency_from.value == "USD" && currency_to.value == "USD") : 
        currency_amount.innerHTML = `USD ${amount}`;
        break;

        default : 
        currency_amount.innerHTML = `${currency_from.value} to ${currency_to.value}`

    }

});