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

//Obtain ifo from checkboxes:

function getCheckBox(checkedInput, item) {
    const Checkbox = document.querySelectorAll(checkedInput);
    if(Checkbox.length === 0) {
    return console.log('I dont want: ', item)
    } else {
    let checkboxValues = [] 
    Checkbox.forEach((item) => {
    checkboxValues.push(item.value)
    })
    return console.log('I want:' , item, checkboxValues)
    }
}

//Wrap multiple functions into one:

function wrapper(){
    getPizza()
    getCheckBox('input[name="sauce"]:checked', 'sauce')
    getCheckBox('input[name="drink"]:checked', 'drink')
    getName()
}
btn.addEventListener('click', wrapper)

function getName() {
    const obtainName = document.querySelector('#name').value
    if(obtainName.length < 3){
    return alert('Podaj prawdiwe dane')
    } else {
    return console.log('Name: ', obtainName)
    }
}

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