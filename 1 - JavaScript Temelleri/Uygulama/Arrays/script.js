// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.


// 2- Dizi kaç elemanlıdır?

// 3- Dizinin ilk ve son elemanı nedir?

// 4- Elma dizinin bir elemanımıdır?


// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

// meyveler[meyveler.length] = "Kiraz";


// 6- Dizinin son 2 elemanını siliniz.


// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet  2009 (60,60,70)
    */



// 1-
let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
let sonuc;

// 2-
// sonuc = meyveler.length;
// console.log(sonuc);

// 3-
// console.log(meyveler[0]);
// console.log(meyveler[sonuc-1]);

// 4-
// sonuc = meyveler.indexOf("Elma");
// console.log(sonuc);

// 5-
// sonuc = meyveler.push("Kiraz");
// console.log(meyveler);

// 6-
// sonuc = meyveler.pop();
// sonuc = meyveler.pop();
// console.table(meyveler);

// 7-

let ogrenci1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [70, 60, 80]
];

let ogrenci2 = [
    "Ada",
    "Bilgi",
    2012,
    [80, 80, 90]
];

let ogrenci3 = [
    "Ahmet",
    "Bilgi",
    2009,
    [60, 60, 70]
];

let now = new Date();
let yas1 = now.getFullYear() - ogrenci1[2];
let ortalama1 = (ogrenci1[3][0]+ogrenci1[3][1]+ogrenci1[3][2]) / 3;
console.log(`${ogrenci1[0]} ${ogrenci1[1]} ${yas1} yaşındadır. Ortalaması ${ortalama1}`);

let yas2 = now.getFullYear() - ogrenci2[2];
let ortalama2 = (ogrenci2[3][0]+ogrenci2[3][1]+ogrenci2[3][2]) / 3;
console.log(`${ogrenci2[0]} ${ogrenci2[1]} ${yas2} yaşındadır. Ortalaması ${ortalama2}`);

let yas3 = now.getFullYear() - ogrenci3[2];
let ortalama3 = (ogrenci3[3][0]+ogrenci3[3][1]+ogrenci3[3][2]) / 3;
console.log(`${ogrenci3[0]} ${ogrenci3[1]} ${yas3} yaşındadır. Ortalaması ${ortalama3}`);