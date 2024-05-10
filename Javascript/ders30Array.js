//array - dizilerde çalışmak

//array olusturmak

let domain = "kodluyoruz";
let isactive = false;

let items = [1,2,3,isactive,domain];
console.log(items);


let emmtyArray = [] //boş liste oluşturmak neden boş liste oluşturuyoruz, websitedeki form daki elemanları bu boş listeye eklemek için kullanabilirim.


//array içerisindeki elaman sayısını ogrenmek
//items.length
console.log(items.length)
document.querySelector("#infoArray").innerHTML = items.length;

//array içindeki ilk elemanın cagrilmasi

items[0] // dizilerde 1 ile saymaya başlanmaz 0 ile saymaya başlanır
console.log(items[0]);

//array içindeki soon elemanın cagrilmasi
console.log(items[items.length-1])


//array içindeki ortadaki elemanın cagrilmasi
console.log
(
    items[Math.floor(items.length / 2)]
)


//degisken icindeki bilginin Array olup olmadığını kontrol etmek
console.log
(
    typeof(items) //object olarak cikti veriyor 
)
//bunun yerine şunuyapabiliriz

console.log
(
    Array.isArray(items) // true yada false değer dönrürür
)


//hangileri isArray -> True değer verir

console.log(" [] : ", Array.isArray( [] ))  //true deger
console.log("1 : ", Array.isArray( 1 )) // false deger
console.log("true : ", Array.isArray( true )) // false değer