function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}


Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi javaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("2-Hangisi js paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("3-Hangisi JavaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("4-Hangisi JS paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b")
];
