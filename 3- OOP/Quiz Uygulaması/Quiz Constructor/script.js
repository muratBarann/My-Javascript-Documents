function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}


Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let soru1 =new Soru("Hangisi javaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b");

let soru2 =new Soru("Hangisi .net paket yönetim uygulamasadır", {a: "java", b: "nuget", c:"Typescript"}, "b");




let sorular = [
    new Soru("1-Hangisi javaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("2-Hangisi js paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("3-Hangisi JavaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("4-Hangisi JS paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b")
];


function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
}

const quiz = new Quiz(sorular);

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}




document.querySelector(".btn-start").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex){
        console.log(quiz.soruGetir());
        quiz.soruIndex +=1 ;
    }
    else{
        console.log("quiz bitti");
    }
})





