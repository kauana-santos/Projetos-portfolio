const teclasNum = [...document.querySelectorAll(".num")] 
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const tOn = document.getElementById("t-on")
const limpar = document.getElementById("limpar")
const display = document.querySelector(".display")

let sinal = false
let decimal = false

teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal=false
        if(evt.target.innerHTML== ","){
            if(!decimal){
            decimal = true
            display.innerHTML += evt.target.innerHTML
        }
        } else{
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        
        if(!sinal){
            sinal = true
            if(evt.target.innerHTML== "x"){
                display.innerHTML += "*"
            } else{
                display.innerHTML += evt.target.innerHTML
            }
    }
    })
})

limpar.addEventListener("click", (evt)=>{
    display.innerHTML=""
    sinal=false
    decimal= false
})

