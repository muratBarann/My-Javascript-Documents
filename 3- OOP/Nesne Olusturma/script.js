function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function(cevap){
        return this.dogruCevap == cevap
    }

    
}


let soru1 =new Soru("Hangisi javaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b")

let soru2 =new Soru("Hangisi .net paket yönetim uygulamasadır", {a: "java", b: "nuget", c:"Typescript"}, "b")

console.log(soru1.soruMetni);
console.log(soru1.cevapSecenekleri);
console.log(soru1.dogruCevap);
console.log(soru1.cevabiKontrolEt("b"));
console.log("");
console.log(soru2.soruMetni);
console.log(soru2.cevapSecenekleri);
console.log(soru2.dogruCevap);
console.log(soru1.cevabiKontrolEt("b"));


let sorular = [
    new Soru("Hangisi javaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("Hangisi js paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("Hangisi JavaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("Hangisi JS paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("Hangisi Js paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("Hangisi Javascript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b")
]

console.log("");

for (let i in sorular){
    console.log(sorular[i].soruMetni);
    console.table(sorular[i].cevapSecenekleri);
    console.log(sorular[i].dogruCevap);
    console.log("");
}