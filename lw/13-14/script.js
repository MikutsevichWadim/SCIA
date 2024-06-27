
document.querySelector('#bGetUrl').addEventListener("click", function() {
    console.log('lol')
    document.getElementById('url').innerHTML = window.location.href
})

// задание 2

secondElement = document.body.children[1]

secondElement.addEventListener("click", function() {
    secondElement.remove()
})

secondElement.addEventListener("mouseover", function(){
    with (secondElement.style) {
        color = "blue"
        fontSize = "25px"
        border = "1px solid green"
    }
    secondElement.classList.add("classOnHover")
})

secondElement.addEventListener("mouseout", function(){
    with (secondElement.style) {
        color = "inherit"
        fontSize = "inherit"
        border = "none"
    }
    secondElement.classList.remove("classOnHover")
})

// задание 4

document.querySelector("#bGetPCName").addEventListener("click", function() {
    var features = "width=300,height=500,scrollbars=yes,status=no";
    var newWindow = window.open("", "newWindow", features);
    newWindow.document.write("<html><head><title>New Window</title></head><body>");
    newWindow.document.write("<h1>Привет, мир!</h1>");
    newWindow.document.write("<p>Это новое окно размером 300x500 пикселей.</p>");
    newWindow.document.write("</body></html>");
})

// задание 5

const emailField = document.getElementById('email');
const maxLengthField = document.getElementById('max-length-field');
    
document.getElementById('pusk').addEventListener('click', function(event) {

    // Получение всех обязательных полей формы

    var isValid = true;

    const emailValue = emailField.value;

    // Проверка на валидность email с использованием регулярного выражения
    if (isValidEmail(emailValue)) {
        // Устанавливаем стили для корректного ввода
        emailField.style.borderColor = 'green';
    } else {
        // Устанавливаем стили для некорректного ввода
        emailField.style.borderColor = 'red';
        isValid = false;
    }

    const maxLengthFieldValue = maxLengthField.value

    if (isValidLength(maxLengthFieldValue)) {
        maxLengthField.style.borderColor = 'green';
    }
    else {
        maxLengthField.style.borderColor = 'red';
        isValid = false;
    }

    // Если форма невалидна, предотвращаем её отправку
    if (!isValid) {
    }
    else {
        alert("Форма отправлена");
    }
});

function isValidEmail(email) {
    // Регулярное выражение для проверки валидности email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidLength(maxLengthFieldValue) {
    // Регулярное выражение для проверки валидности email
    if (maxLengthFieldValue.length > 20) {
        return false
    }
    return true
}