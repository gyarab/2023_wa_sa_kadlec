let el = document.getElementById("stav-hry")
el.innerHTML = "Nová hra";

let counter = 5

function myFnc() {
    console.log("executed")
    el.innerHTML = counter
    counter--
    if(counter > -1){
        setTimeout(myFnc, 1000)

    }
}

setTimeout(myFnc, 1000)

let card1 = document.getElementById("card-1")
let card2 = document.getElementById("card-2")
let card3 = document.getElementById("card-3")
let card4 = document.getElementById("card-4")

function clickCard1(){
    card1.innerHTML = '<img src="img/liv.jpg" >'
}
function clickCard2(){
    card2.innerHTML =  '<img src="img/ars.jpg" >'
}
function clickCard3(){
    card3.innerHTML = '<img src="img/ars.jpg" >'
}function clickCard4(){
    card4.innerHTML = '<img src="img/liv.jpg" >'
}
