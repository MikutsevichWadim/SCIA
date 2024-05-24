function formula(a, b, c) {
    var part0 = b*b + 4*a*c
    if (part0 < 0) {
        return "Ошибка: корень из отрицательного"
    }
    var part1 = b + Math.sqrt(part0)
    var part2 = 2 * a
    if (part2 == 0) 
        return "Ошибка: делить на ноль нельзя"
    var part3 = a*a*a * c - Math.pow(b, -2)
    return part1 / part2 - part3
}

function calc() {
    var a = getValueById("a")
    var b = getValueById("b")
    var c = getValueById("c")
    var result = formula(a,b,c)
    setInnerHTMLById("output", result)
}

function getValueById(elementId) {
    return document.getElementById(elementId).value
}

function setInnerHTMLById(elementId, innerHTML) {
    return document.getElementById(elementId).innerHTML = innerHTML
}

window.calc = calc
