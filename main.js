var inpNum1 = document.querySelector("#numero1")
var inpNum2 = document.querySelector("#numero2")
var inpResultado = document.querySelector("#resultado")
var btnSumar = document.querySelector("#btnSumar")
var btnProbar = document.querySelector("#btnProbar")

console.log(inpNum1)
console.log(inpNum2)

btnProbar.addEventListener("click", () => {
    let num = Number(inpNum1.value)

    if (num < 10) {
        inpResultado.value = "Unidades"
    } else if (num < 100) {
        inpResultado.value = "Decenas"
    } else if (num < 1000) {
        inpResultado.value = "Centenas" 
    } else if (num < 10000){
        inpResultado.value = "Millar"
    } else {
        inpResultado.value = "Fuera de rango"
    }
})

btnSumar.addEventListener("click", () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)

    inpResultado.value = num1 + num2
})

btnRestar.addEventListener("click", () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    
    inpResultado.value = num1 - num2
})

btnMultiplicar.addEventListener("click", () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    
    inpResultado.value = num1 * num2
})

btnDividir.addEventListener("click", () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    
    inpResultado.value = num1 / num2
})

btnBorrar.addEventListener("click", () => {
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    
    inpResultado.value = ""
    inpNum1.value = ""
    inpNum2.value = ""
})