/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/


// 1-

let ogr1Ad = "Ada";
let ogr1Soyad = "Bilgi";
let ogr1DogumTarihi = 2012;
let ogr1Mat1 = 70;
let ogr1Mat2 = 70;
let ogr1Mat3 = 80;

let ogr2Ad = "Yiğit";
let ogr2Soyad= "Bilgi";
let ogr2DogumTarihi = 2010;
let ogr2Mat1 = 40;
let ogr2Mat2 = 40;
let ogr2Mat3 = 50;

// 2-

let ogr1Yas = (2022 - ogr1DogumTarihi);
let ogr2Yas = (2022 - ogr2DogumTarihi);

// 3-

let ogr1Ortalama = ((ogr1Mat1 + ogr1Mat2 + ogr1Mat3) / 3);
let ogr2Ortalama = ((ogr2Mat1 + ogr2Mat2 + ogr2Mat3) / 3);

// 4-

let ogr1BasarıDurumu = (ogr1Ortalama >= 50);
let ogr2BasarıDurumu = (ogr2Ortalama >= 50);


console.log("İsim : " + ogr1Ad + " " + ogr1Soyad);
console.log("Yaş : " + ogr1Yas);
console.log("Ortalama : " + ogr1Ortalama);

console.log("");

console.log("İsim : " + ogr2Ad + " " + ogr2Soyad);
console.log("Yaş : " + ogr2Yas);
console.log("Ortalama : " + ogr2Ortalama);
console.log ("Geçme Durumu : " + ogr2BasarıDurumu);



