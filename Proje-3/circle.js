// Dairenin alanını hesaplayan fonksiyon
function circleArea(radius) {
  return Math.PI * radius * radius;
}

// Dairenin çevresini hesaplayan fonksiyon
function circleCircumference(radius) {
  return 2 * Math.PI * radius;
}

module.exports = { circleArea, circleCircumference };
