//array yapisina oge eklemek ve array icerisinden istenilen ogenin cirakilması



let items = [10,20,30,40,]
console.log("items ilk hali : ", items)


//ARRAY : sona eleman eklemek -> push

items.push(90);
console.log("eleman sona eklendi: ",items)

//ARRAY : basa eleman eklemek -> unshift

items.unshift(5)
console.log("eleman basa eklendi: ",items)


//ARRAY : sondaki elemanı cikarmak -> pop

let lastItem = items.pop() //istersek bu cikardigimi elemanı baska bir yere kayıt edebiliriz log kaydı gibi düsünerek


console.log("sondaki eleman cikarildi ",items)
console.log("cikarilan elemanı bir degiskene kayıt ettik: ",lastItem)

//ARRAY : bastaki elemanı cikarmak -> shift

let firstItem = items.shift() //istersek bu cikardigimi elemanı baska bir yere kayıt edebiliriz log kaydı gibi düsünerek


console.log("ilk eleman cikarildi ",items)
console.log("cikarilan elemanı bir degiskene kayıt ettik: ",firstItem)


//ARRAY icindeki bir ogenin bilgisinin degisitirlmesi

items[0] = 5;
console.log("istenilen elemanın degeri degistirildi",items)

//sondaki elemanın degerinin degistirilmesi
items[items.length-1] = 3000;
console.log("sondaki elamanın degeri degistirildi" ,items)

//istenilen sıraya eleman eklemek
items[500] = 500
console.log("500. sıraya elemean ekledik arada bosluk kaldı onu da ilerde nasıl silebilecegimizi görücez" , items);




