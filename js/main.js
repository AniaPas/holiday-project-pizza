//Obtaining the submit-button from HTML

const btn = document.getElementById('submit-btn')

//Creating the Order class

class Order {
    constructor(name, email, phone, address, pizza, sauce, drink, message) {
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
        this.pizza = pizza
        this.sauce = sauce
        this.drink = drink
        this.message = message

    }
}

//Obtain the selected pizza option from the HTML select tag:

function getPizza() {
const pizzaSelect = document.getElementById('pizza-select')
const pizzaValue = pizzaSelect.value;
    
    return pizzaValue
}

//Obtain ifo from checkboxes:

function getCheckBox(checkedInput, item) {
    const Checkbox = document.querySelectorAll(checkedInput);
    if(Checkbox.length === 0) {
    return []
    } else {
    let checkboxValues = [] 
    Checkbox.forEach((item) => {
    checkboxValues.push(item.value)
    })
    return (checkboxValues)
    }
}

//Obtain info from inputs

function getName() {
    const obtainName = document.querySelector('#name').value
    if(obtainName.length < 3){
        alert('Podaj prawdziwe dane i YOLO xd')
    return obtainName
    } else {
    return obtainName
    }
}
function getMail() {
    const obtainMail = document.querySelector('#email').value
    if(obtainMail.search('@') > 0 && obtainMail.search('@') < obtainMail.length - 1) {
    return obtainMail
    } else {
        alert('Nie spinaj się, daj prawdiwy e-mail!')
    return obtainMail
    }
}
const re = /^\+48\d{9}$/;
function getPhone() {
    const obtainPhone = document.querySelector('#phone').value
    const rightNo = re.exec(obtainPhone)
    if(!rightNo) {
        alert('Nie ma numeru, nie ma szamy!');
        return obtainPhone
    } else {
        return obtainPhone
    }
}
function getAddress() {
    const obtainAddress =  document.querySelector('#address').value
    if(obtainAddress.search('-') === -1 || obtainAddress.length < 9){
        alert('Ziom, ziomalko, to raczej nie Twój adres!');
        return obtainAddress
    } else {
        return obtainAddress
    }
}
function getChefMessage() {
    const obtainChefMessage = document.querySelector('#chef-message').value;
    if(obtainChefMessage.search('kurw') !== -1 || obtainChefMessage.search('pierd') !== -1 || obtainChefMessage.search(' chuj') !== -1 || obtainChefMessage.search(' huj') !==-1) {
         alert('wulgaryzmy są ok, ale tutaj są zbędne')
        return obtainChefMessage     
    } else if (obtainChefMessage.length < 1) {
        console.log('No message for the chef')
        return obtainChefMessage
    } else {
         return obtainChefMessage
    }
}
function changeStyle() {
    
    btn.style.backgroundColor = 'rgb(69, 182, 31)'
}

//Wrap multiple functions into one and applying the class constructor:

function wrapper(){
    changeStyle()
    const order1 = new Order(getName(), getMail(), getPhone(),getAddress(), getPizza(), getCheckBox('input[name="sauce"]:checked', 'sauce'), getCheckBox('input[name="drink"]:checked', 'drink'), getChefMessage())
    console.log(order1)
    
}
btn.addEventListener('click', wrapper)





