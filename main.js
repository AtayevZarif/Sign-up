let body = document.querySelector("body")
let text = document.querySelector("h1")
let form = document.querySelector("form")

let idInp = document.querySelector("#id")
let idAlert = document.querySelector("#id_alert")
let password = document.querySelector("#password")
let checkbox = document.querySelector("#visibility_checkbox")
let passwordAlert = document.querySelector("#password_alert")

let submit = document.querySelector("#submit")


let checkFunction = (event) => {
    event.preventDefault()
    let valueId = Number(idInp.value)
    let valuePassword = Number(password.value)

    let idLength = idInp.value.length
    let passwordLength = password.value.length

    console.log(valueId);
    console.log(valuePassword);

    idAlert.style.display = "none"
    idInp.style.background = "#f3f3f3"
    idInp.style.border = "none"
    passwordAlert.style.display = "none"
    password.style.background = "#f3f3f3"
    password.style.border = "none"

    
    if (valueId == 123456 && valuePassword == 78900) {
        text.innerText = "Siz spacega muvaffaqiyatli kirdingiz"
        text.style.color = "green"
    }
    else {
        text.innerText = "Siz spacega kirmadingiz"
        text.style.color = "red"
    }

    if (idLength == 0) {
        idAlert.style.display = "block"
        idInp.style.background = "yellow"
        idInp.style.border = "2px solid red"
        idAlert.innerText = "Modme ID bo'sh bo'lishi mumkin emas"
    }
    else if (isNaN(valueId)) {
        idAlert.style.display = "block"
        idInp.style.background = "yellow"
        idInp.style.border = "2px solid red"
        idAlert.innerText = "Modme ID faqat sonlardan iborat bo'lishi mumkin"
    }
    else if (valueId != 123456) {
        idAlert.style.display = "block"
        idInp.style.background = "yellow"
        idInp.style.border = "2px solid red"
        idAlert.innerText = "Modme IDingiz noto'g'ri yozilgan"
    }

    if (passwordLength == 0) {
        passwordAlert.style.display = "block"
        password.style.background = "yellow"
        password.style.border = "2px solid red"
        passwordAlert.innerText = "Parol bo'sh bo'lishi mumkin emas"
    }
    else if (isNaN(valuePassword)){
        passwordAlert.style.display = "block"
        password.style.background = "yellow"
        password.style.border = "2px solid red"
        passwordAlert.innerText = "Parol faqat sonlardan iborat bo'lishi mumkin"
    }
    else if (valuePassword != 78900){
        passwordAlert.style.display = "block"
        password.style.background = "yellow"
        password.style.border = "2px solid red"
        passwordAlert.innerText = "Parolingiz noto'g'ri yozilgan"
    }
}

let unvisibilityFunction = () => {
    if (password.type == "password") {
        password.type = "text"
    } 
    else {
        password.type = "password"
    }
}


form.addEventListener("submit", checkFunction)
checkbox.addEventListener("click", unvisibilityFunction)