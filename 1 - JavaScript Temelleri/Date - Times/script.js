let now = new Date();
let sonuc;

// Get Methods
sonuc = now; //Genel Uzun Tarih
sonuc = now.getDate();   //Ayın Gün
sonuc = now.getDay();    //Haftanın Günü
sonuc = now.getFullYear();  //Yıl
sonuc = now.getHours();    //Saat
sonuc = now.getMilliseconds();   //MiliSaniye
sonuc = now.getMinutes();    //Dakika
sonuc = now.getSeconds();   //Saniye


// Set Methods

// sonuc = now.setFullYear(2030);      //Yılın Bilgisini set etme işlemi uyguladık
// sonuc = now.setMonth(7);
// sonuc = now.setDate(7);

sonuc = now;

let dogumTarihi = new Date(2001, 04, 12);           //İstediğimiz bir tarih için nesne oluşturuyoruz.

sonuc = now.getFullYear() - dogumTarihi.getFullYear();  //Oluşturuğumuz nesne ile şuanın tarihinden çıkartıyoruz ve bu şekilde yaşımızı öğreniyoruz.





console.log(typeof sonuc);
console.log(sonuc);