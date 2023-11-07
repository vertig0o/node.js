// circle.js dosyasını içe aktar
const { circleArea, circleCircumference } = require("./circle");

// Dairenin yarıçapı
const r = 5;

// Dairenin alanını hesaplayıp consola yazdır
console.log(`Dairenin Alanı: ${circleArea(r)}`);

// Dairenin çevresini hesaplayıp consola yazdır
console.log(`Dairenin Çevresi: ${circleCircumference(r)}`);
