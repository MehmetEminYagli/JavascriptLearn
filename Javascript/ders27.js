//FORM SUBMİT

let formDOM = document.querySelector("#userform")

formDOM.addEventListener('submit',formsubmit)


function formsubmit(event) //event göndermeyi unutma yoksa işlem gerçekleşmez
{
    event.preventDefault() //bu kod ile url kısmında verilerin gözükmesini engellemiş oluyoruz
    console.log("işlem gerçekleşti")    
}
