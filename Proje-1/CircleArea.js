const yariCap = process.argv[2];

if (!yariCap) {
  console.log("Yarıçap bilgisini giriniz.");
} else {
  const alan = Math.PI * Math.pow(yariCap, 2);

  console.log(`Yarıçapı ${yariCap} olan dairenin alanı: ${alan}`);
}
