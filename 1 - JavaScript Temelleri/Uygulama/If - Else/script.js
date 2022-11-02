// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)

// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;

    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

    // c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.



// // 1-
// var girilenSayi;
// girilenSayi = prompt("10 - 50 arasında olup olmadığını kontrol etmek istediğiniz sayıyı giriniz");
// if ((girilenSayi >=10) && (girilenSayi <= 50)) {
//     console.log("Girilen sayi 10 - 50 arasında")
// }

// else {
//     console.log("Girilen sayi 10 - 50 arasında değil");
// }

// // 2-
// var sayiTekmi;
// sayiTekmi = prompt("Teklik durumunu merak ettiğiniz sayıyı giriniz");
// if (sayiTekmi % 2 == 1) {
//     console.log("Sayi Tek");
// }

// else {
//     console.log("Sayi Çift")
// }


// // 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)
// let x=40, y= 20, z=10

// if((x > y) && (x > z)) {
//     console.log("En Büyük Sayı X");
// }

// else if ((y > x) && (y > z)) {
//     console.log("En Büyük Sayı Y");
// }

// else if ((z > x) && (z > y)) {
//     console.log("En Büyük Sayı Z");
// }

// else {
//     console.log("Sayılar eşit")
// }


// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;

    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

    // c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.


// // 4-
let vize1 = prompt("1. Vize Notunu Giriniz");
let vize2 = prompt("1. Vize Notunu Giriniz");
let final1 = prompt("Final Notunu Giriniz");

let ortalama = (vize1 * 0.2) + (vize2 * 0.2) + (final1 * 0.6);

// 4-a
// if(ortalama >= 50){
//     console.log("Geçti");
// }

// else {
//     console.log("Kaldı");
// }

// 4-b
// if ((ortalama >= 50) && (final1 >= 50)){
//     console.log("Geçti");
// }

// else {
//     console.log("Kaldı");
// }


// 4-c
if ((ortalama >= 50) || (final1 >= 70)) {
       console.log("Geçti");    
}

else {
        console.log("Kaldı");
    }
