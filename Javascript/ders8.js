/*String Veri Türü İşlemleri
String nedir?
JavaScript metinlerin tümü "string" veri tipi içinde tutulur ve "string" veri türü ile ilgili yapabileceğimiz birden fazla işlem vardır. Bu yazımızda bunlardan bahsedeceğiz.

Length Özelliği - Uzunluk Değerini Alma
String veri tipinde bulunan bir ifadenin ne kadar uzun olduğunu bulmak için Length özelliğimizi kullanırız.

code

cikti

indexOf - Metin İçinde Arama Yapma
Metnin içinde aramak istediğimiz değerin index numarasını bize verir.

code

cikti

lastIndexO f- Metin İçinde Arama Yapma
indexOf ile arasındaki tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen index numarasını döndürür.

code

cikti

Search - Metin İçinde Arama Yapma
indexOf ile aynı sonuçlara ulaşırız genel olarak "Regular Expressions" işlemleri için çok kullanılan bir metottur.

code

cikti

Slice - Metninden Parça Almak
Metin içinden almak istediğimiz yerlerin index numaralarını vererek metin içinde bulunan parçayı alabiliriz.

code

Bitiş index numarasındaki karakter sonuca dahil edilmez.

cikti

Not: Tek index yazmak ise yazılan index numarasından sonra gelen tüm karakterleri almasına neden olur.

code

cikti

Replace – Metin Bulma ve Değiştirme
Aranan metni istediğimiz metin ile değiştirmemize olanak sağlar.

code

cikti

toUpperCase ve toLowerCase

code

toUpperCase metin içinde bulunan tüm karakterleri büyük harf yapmamıza olanak sağlar.

toLowerCase metin içinde bulunan tüm karakterleri küçük harf yapmamıza olanak sağlar.

cikti

Concat - Metin Birleştirme
Elimizde bulunan iki string türündeki veriyi birleştirmemize olanak sağlar.

code

cikti

charAt- İndex Numarasına Göre Karakter Bulmak
Belirtilen index numarasında yer alan karakteri verir.

code

cikti

charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
Belirtilen index numarasında yer alan karakterin Unicode değerini verir.

code

cikti

Split – Metni Diziye Çevirme
Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.

code

cikti

Bir String ifadesi içerisinde yer alan bilgilerin istediğimiz gibi olup olmadığını kontrol etmek isteyebiliriz. İçerisinde mail adresi geçiyor mu? Kullanıcın verilerinde benim aradığım bilgi var mı? Gibi kontroller yapmak istiyor olabiliriz. String veri türü işlemleri bize bu noktada yardımcı olur.

Örnekler üzerinden görelim:

let email = "kodluyoruz@kodluyoruz.org"
let firstName = "JavaScript"
let lastName = "BOOTCAMP"
Bu değişkenleri yazı boyunca kullanacağız.

Karakter Sayısı
String bir ifadenin karakter sayısını (uzunluğunu) bulmak istiyorsak length özelliğini kullanırız.

console.log(email.length);  //25
console.log(firstName.length); //10
Karakter Yeri (Index)
String bir ifadenin içerisinde, aradığımız karakterin yerini bulmak için 2 yöntem vardır. [ ] ve chartAt() metodu bize bu konuda yardımcı olur.

console.log(firstName.[0]); //"J"
console.log(firstName.charAt(2)); //"v"
Büyük/Küçük Harfe Çevirme
String bir ifadeyi tamamen büyük veya küçük harf yapmak istiyorsak. Büyük harf için toUpperCase(), küçük harf için ise toLowerCase() metotlarını kullanırız.

firstName = firstName.toUpperCase();
console.log(firstName); //"JAVASCRIPT"

lastName = lastName.toLowerCase();
console.log(lastName); //"bootcamp"
İlk Harfi Büyük Kalan Harfleri Küçük Yapma
En başta değişkenlerimizi tanımlardan lastName değişkenimizi "BOOTCAMP" olarak sadece büyük harf ile yazdık. Bu ifademizi "Bootcamp" değiştirmek isteyebiliriz. Ya da sadece küçük harfler ile yazılmış bir özel ismin ilk harfini, büyük harf yapmak istiyor olabiliriz.

Bu tür durumları şu şekilde sağlarız.

lastName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` //Bootcamp
İstediğimiz Bilgiyi Aramak
String bir ifade içerisinde, istediğimiz bir bilginin yerini bulmak için search() metodunu kullanırız. Kontrol ettiğimiz ifade nereden başlıyor ise bize onun yerini verir.

console.log(email.search("@")); //10
Eğer arattığımız şey yok ise -1 sonucu verir.

console.log(email.search("olmayan")); //-1
search() yerine kullanabileceğimiz başka bir metot ise indexOf() metodudur.

console.log(email.indexOf(".")); //21
Belli Bir Bilgiyi Almak
Biraz önce search() metoduyla @ işaretinin nerede olduğunu almıştık. İşte bu noktada @ işaretinden sonra gelen domain bilgisini almak bizim için çok kolay bir hale geldi, slice() metoduyla bu işlemi gerçekleştirebiliriz.

console.log(email.slice(10+1)); //"@kodluyoruz.org"
//@ ifadesini almak istemediğimiz için +1 kullandık.
Başka bir kullanımı ise şu şekildedir.

console.log(firstName.slice(1,4)); //"ava"
Yukarıdaki ifadede 1'inci index'ten başla ve 4. index'e kadar olan yeri al dedik. Bu noktada şunu anlamak önemli, 1. index'ten başlayıp 4. index'e kadar gittiğimiz için sadece 3 karakter aldı.

email değişkeninde sadece domaini almak istesek bunu iki farklı yöntemle yapabiliriz.

let domain = email.slice(email.search("@")+1); 
console.log(domain); //"kodluyoruz.org"

let domain = email.slice(email.indexOf("@")+1); 
console.log(domain); //"kodluyoruz.org"
Bilgiyi Değiştirmek
email değişkeninde domaini değiştirmek istersek eğer, replace() metodu bize yardımcı olur.

email = email.replace("kodluyoruz.org", "gmail.com");
console.log(email); //"kodluyoruz@gmail.com"
İstediğim Bilgi Var Mı?
Aradığımız bilginin değişken içerisinde olup olmadığını kontrol etmek için includes() metodunu kullanırız. true veya false döner.

email.includes("@"); //true
email.includes("$"); //false
Nasıl Başladı Nasıl Bitti?
Aldığımız veri istediğimiz bilgiyle başladı mı? Veya istediğimiz bilgiyle bitti mi? Bu durumu kontrol etmek için startsWith() ve endsWith() metodunu kullanırız.

email.startsWith("@"); //false
email.endsWith("org"); //true
 */