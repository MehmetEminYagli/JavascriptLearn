//local storage ile veri kayıt etme ve çekme ders24

window.localStorage.setItem("key","value");

localStorage.setItem("anagtar","javascript bebyyy")

console.log(localStorage.getItem("anagtar"))




//DERS 25 BİRDEN ÇOK VERİ TÜRÜ OLDUĞUNDE NE YAPICAZ

//LocalStorage içerisine Farklı Türde Veriler Eklemek


let userstatus = {username: 'Mehmet' , isActive: true}

localStorage.setItem("user" , userstatus)

//böyle kayıt ettiğimzde object object olarak gözükecek bunu JSON KULLANARAK STRİNGFY'E ÇEKMEMİZ GEREKİYOR
//STRİNGFY ile çektiğimizde bütün verile string türünde olucak o zaman istediğimiz verileri kullanamıyacağız
//verilerii kullanabilmek içinde parse yapmamız gerekiyor ki veriler stringten çıkıp ayrılsın parsel parsel ayırmaktan gelsin aklına


localStorage.setItem("userJSON" , JSON.stringify(userstatus)) 

console.log("ayrılmamış hali => "+ localStorage.getItem("userJSON") )

//şimdi bilgiyi yazdırmak istesek hepsini yazıcak o yüzden ayırmamız gerekiyor

JSON.parse(localStorage.getItem("userJSON")) //burada dikkatli ol json.parse(içerisine yazılıyor)

console.log("verilerin ayrılmış hali birinci key :=> "+JSON.parse(localStorage.getItem("userJSON")).username)

console.log("verilerin ayrılmış hali ikinci key  :=> "+JSON.parse(localStorage.getItem("userJSON")).isActive)