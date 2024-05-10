//Cok kullanilan Array Mettotları ve Array içinde Array

let items = [1,2,3,4,5]

//Array icinde Array:

let femaleUsers = ["Ayse", "Fatma", "Hulya"]
let maleUsers = ["Ahmet","Mehmet","Mustafa"]

items.unshift(femaleUsers);

items.push(maleUsers)

console.log(items)

console.log(items.length) // cevap 7 cikicak cünkü dizi icerisine ekledigimiz diziler icerisindeki bilgileri almaz onu tek bir dizi olarak oluşturur ve tek bir eleman olarak sayar
//dizi icindeki diziye ulasmak 
console.log(items[0].length)
console.log(items[0] [2]) // dizideki 0.eleman bir dizi ve dizinin icindeki diziye ulasak 2. elemanı cagırıyoruz


//Array İcerisinden oge ayırmak -> Splice(pos, item?)
//pos => ayırmaya kactan baslasın   , Kac tane olsun
let newItems = items.splice(2,4)
console.log("newItems: ",newItems)
console.log("Items: " ,items)
//Array icerisindekii ogenin index bilgisini bulmak -> indexof('value')
items.unshift("Lorem")
items.push("helü")
console.log
(
    items.indexOf('lorem')
)

console.log
(
    items.indexOf('helü')
)
//Array Kopyalamak -> Slice, [...ES6]


let copyItems = items
console.log(copyItems)

copyItems.pop() //son elemanı cıkardık
console.log("copyitems: " ,copyItems)
console.log("items", items); //burada yapılan copyalama işlemi olmuyor her iki listede aynı işlemi yapmış oluyoruz bunun başımıza gelmesini istemeyiz


//böyle yapmamız gerekiyor
console.log("kopyalandıktan sonraki hali")
copyItems = items.slice();
copyItems.pop() //son elemanı cıkardık
console.log("copyitems: " ,copyItems)
console.log("items", items); 

//yeni sistemlerde kopyalama işlemleri
                //... kopyalanacak array ismi
let es6Items = [...items]  //es5 ve sonrasında gelen kopyalama islemi
console.log("yeni sistem ile kopyalama ",es6Items)


//Iki array bilgisini birlestirmek -> [...ES6 , ...ES6] //iki farklı listeyi tek bir listede yenii sistemde birleştirme
let allUsers = [...femaleUsers , ...maleUsers]
console.log("yeni sistem ile iki array dizisini tek array dizisinde birlestirmek" , allUsers) 

//Array icerisindeki bilgiyi String'e cevirmek -> toString , join
// 1 . yöntem
console.log(allUsers.toString())

// 2 . yöntem

console.log(allUsers.join(" --- "))



//istedigimiz Index Bilgisine Oge Eklemek -> splice(index , 0 , Value)
allUsers.splice(allUsers.length-1, 0 ,"Batuhan")
console.log(allUsers)



