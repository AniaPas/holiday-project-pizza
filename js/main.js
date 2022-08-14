//Obtain the selected pizza option from the HTML select tag:
const btn = document.querySelector('.submit-btn');
console.log(btn)
function getPizza() {
const pizzaSelect = document.getElementById('pizza-select')
const pizzaValue = pizzaSelect.value;
    if(pizzaValue === 'none'){
    return console.log('Nie chcę pizzy')
    } else {
    return console.log('Chcę pizzę: ', pizzaValue)
    }
}

function getSauce() {
    const sauceCheckbox = document.querySelectorAll('input[name="sauce"]:checked');
    if(sauceCheckbox.length === 0) {
    return console.log('Nie chcę sosu')
    } else {
    let sauceValues = [] 
    sauceCheckbox.forEach((item) => {
    sauceValues.push(item.value)
    })
    return console.log(sauceValues)
    }
}

btn.addEventListener('click', getPizza);
btn.addEventListener('click', getSauce)

//const selectPizza = document.getElementById('pizza-select');
//selectPizza.addEventListener('change', function handleChange (event){
    //console.log(event.target.value);
    //console.log(selectPizza.options[selectPizza.selectedIndex].text);
//})

//const chooseSauce = document.querySelectorAll()
class Order {
    constructor(pizza, sauce, name, email, address, phone, drink) {
        this.pizza= pizza
        this.sauce = sauce
        this.name = name
        this.email = email
        this.address = address
        this.phone = phone
        this.drink = drink
    }
    get getOrder(){
        `Klient/ka (${this.name}, ${this.email}, ${this.address}, nr telefonu ${this.phone}) zamówił/a pizzę ${this.pizza} z sosem ${this.sauce} i napojem ${this.drink}`
    }
}