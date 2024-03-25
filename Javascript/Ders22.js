

let greeting = document.querySelector("#greeting")
let counter = document.querySelector("#counter")
let startCounter = 0;
counter.innerHTML = startCounter
// greeting.addEventListener("click",function()
// {
//     console.log("tiklandi")
//     startCounter ++
//     counter.innerHTML = startCounter
// })

//böyle yapman daha mantıklı olur

greeting.addEventListener("click", domClick)

function domClick()
{
    console.log("tiklandi")
    console.log(this.innerHTML = "tiklandigi icin bilgi degisti")
    this.style.color == "red" ? this.style.color ="Black" : this.style.color="red"  
    startCounter ++
    counter.innerHTML = startCounter

}

//üstüne geldiğinde rengi değişsin

greeting.addEventListener("mouseover", domMouseOver)

function domMouseOver()
{
    this.style.color == "red" ? this.style.color ="Black" : this.style.color="red"  
}
greeting.addEventListener("mouseout", domMouseOut)

function domMouseOut()
{
    this.style.color == "red" ? this.style.color ="Black" : this.style.color="red"  
}