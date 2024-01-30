"use strict";

/* const foutDiv = document.getElementById("fout");
for (const input of document.getElementsByTagName("input")){
   input.onblur =function () {
       foutDiv.hidden = this.value !==""; 
       
   }
}; */

const foutDiv = document.getElementById("fout");
for (const input of document.querySelectorAll("input")) {
    if (input.id === "plaats") {
        input.onblur = function () {
            foutDiv.hidden = true ;

        };

    } else {
        input.onblur = function () {
            foutDiv.hidden = this.value !== "";

        };
    }
}

/*  document.getElementById("plaats").onbluur = function () {
      foutDiv.hidden = true;
      
  }*/



/*
Bu ifade, "input" elemanının değerini kontrol eder. this ifadesi, olayı tetikleyen "input" elemanını temsil eder.
 this.value !== "" ifadesi, "input" elemanının değerinin boş olup olmadığını kontrol eder.

Eğer "input" elemanının değeri boş değilse (this.value !== "" true ise), foutDiv.hidden değeri false yapılır.
 Bu durumda, foutDiv elementi görünür hale gelir.

Eğer "input" elemanının değeri boşsa (this.value !== "" false ise), foutDiv.hidden değeri true yapılır. 
Bu durumda, foutDiv elementi gizlenir ve ekranda görünmez hale gelir.

Bu kullanım, genellikle bir form veya giriş alanındaki değerlerin kontrolü amacıyla kullanılır. 
Örneğin, bir kullanıcı bir formu doldurduğunda, 
belirli bir alanın değeri boşsa hata mesajını görüntüleyebilir veya gönderme işlemine izin verilebilir. 
Bu durumda, hidden özelliği, hata mesajının ekranda görünürlüğünü kontrol etmek için kullanılır

*/