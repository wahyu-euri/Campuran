// KODE JAVASCRIPT DASAR
// let Nama = "Eurisko wahyu";;
// let Umur = 16;
// console.log(Nama + " Berumur " + Umur + " Tahun");

// ANGKA DAN OPERASI MATEMATIKA
let angka1 = prompt("Masukkan angka pertama: ");
let angka2 = prompt("Masukkan angka kedua: ");
let operasi = prompt("Masukkan operasi (+, -, *, /): ");
let hasil;
if (operasi === "+") {
    hasil = parseFloat(angka1) + parseFloat(angka2);
}
else if (operasi === "-") {
    hasil = parseFloat(angka1) - parseFloat(angka2);
}
else if (operasi === "*") {
    hasil = parseFloat(angka1) * parseFloat(angka2);
}
else if (operasi === "/") {
    hasil = parseFloat(angka1) / parseFloat(angka2);
}
else {
    console.log("Operasi tidak dikenali");
    hasil = "TIDAK ADA PERHITUNGAN YANG DILAKUKAN";
}
console.log("Hasil perhitungannya adalah : " + hasil);

//MENENTUKAN BILANGAN GENAP ATAU GANJIL
// let angka = prompt("Masukkan sebuah angka: ");
// if (angka % 2 === 0) {
//     console.log(angka + " adalah bilangan genap.");
// } else {
//     console.log(angka + " adalah bilangan ganjil.");
// }

