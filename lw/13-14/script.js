$(document).ready(function(){

// задание 2

    $("#bGetUrl").click(function(){
        $("#url").innerHTML = location.href
    })

    $("#deleteThisImage").click(function(){
        $("#deleteThisImage").remove()
    })

// задание 3

    $("#favoriteSite").hover(
        function(){
            $("#favoriteSite").addClass("classOnHover")
        },
        function(){
            $("#favoriteSite").removeClass("classOnHover")
        }
    )

// задание 4

    $("#getPCName").click(function(){
        const os = require("os");
        const hostname = os.hostname();
        $("#PCName").innerHTML = window.location.hostname;
        window.open("http://google.com", "_blank");
    })

})

// задание 5
    
document.getElementById('education-job-form').addEventListener('submit', function(event) {
    // Получение всех обязательных полей формы
    var requiredFields = document.querySelectorAll('#education-job-form [required]');

    var isValid = true;

    requiredFields.forEach(function(field) {
        if (!field.value) {
            isValid = false;
            field.style.border = '2px solid red'; // Устанавливаем красную границу для незаполненного поля
        } else {
            field.style.border = ''; // Убираем границу, если поле заполнено
        }
    });

    // Если форма невалидна, предотвращаем её отправку
    if (!isValid) {
        alert('Пожалуйста, заполните все обязательные поля.');
        event.preventDefault();
    }
    else {
        alert("Форма отправлена");
    }
});
