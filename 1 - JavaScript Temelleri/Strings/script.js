let ad = "Murat";
let soyad = "Baran";
let yas = 21;
let sehir = "Istanbul";
let mesaj;
// mesaj = "Benim adım: " + ad + " Soyadım: " + soyad + " Yaşım: " + yas + " " + sehir + " 'da yaşıyorum";

// backtick : ``
mesaj = `Benim adım ${ad} soyadım ${soyad}. Yaşım ${yas} ${sehir} 'da yaşıyorun`

console.log(mesaj);


// ternary opearators      
let emeklilik = (65-yas > 0) ? "Emekliliğe " + (65 - yas) + " Kaldı" : "Emeklisiniz"; 


mesaj = `Benim adım ${ad} soyadım ${soyad}. Yaşım ${yas} ${sehir} 'da yaşıyorun. ${emeklilik}`;


console.log(mesaj);