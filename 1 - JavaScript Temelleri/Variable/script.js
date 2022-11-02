var urunAdi = "iPhone 12";     //String

let urunFiyati = "15000";      //String

let uretimTarihi = 2021;      //Number

let urunYenimi = true         //Boolean

let yas;                      //Undefined


console.log(urunAdi);
console.log("Degiskenin Tipi : " + typeof urunAdi);
// Degiskenin Tipi : string

console.log(urunFiyati);
console.log("Degiskenin Tipi : " + typeof urunFiyati);
// Degiskenin Tipi : string

console.log(uretimTarihi);
console.log("Degiskenin Tipi : " + typeof uretimTarihi);
// Degiskenin Tipi : number

console.log(urunYenimi);
console.log("Degiskenin Tipi : " + typeof urunYenimi);
// Degiskenin Tipi : boolean

console.log(yas);
console.log("Degiskenin Tipi : " + typeof yas);
// Degiskenin Tipi : undefined


/*
    Değişen Kuralları
    1- Degiskenler numara ile baslamaz.
    2- Degisken tanımlanırken bosluk bırakılmaz.
    3- Degisken tanımlanırken Turkce karakter kullanılmamaya dikkat edilmelidir. 

*/

let sayi1 = "10";
let sayi2 = "20";
let toplam = sayi1 + sayi2;
console.log(toplam)
// String'de toplama işlemi yan yana koyarak toplama işlemidir.
//  1020

let sayi3 = 10;
let sayi4 = 20;
let sonuc = sayi3 + sayi4;
console.log(sonuc);
// 30

let isim = "Murat";
let soyIsım = "Baran";
let adSoyad = isim + " " + soyIsım;
console.log(adSoyad)
// Murat Baran



// Değiken Tip Dönüşümü 

sayi1 = Number(sayi1);
console.log(typeof sayi1);

sayi1 = toString(sayi1);
console.log(typeof sayi1);

urunYenimi = Number(urunYenimi);
console.log(urunYenimi);            
//Boolean => Number tip değişimde true ise 1 false ise 0 sayı değerini alır.
console.log(typeof urunYenimi);

urunYenimi = urunYenimi.toString();
console.log(urunYenimi);
console.log(typeof urunYenimi);
//Boolean => String tip değişimde true ise 1 false ise 0 metin değerini alır.

sonuc = sayi3.toString() + sayi4.toString();
console.log(sonuc);
// 1020