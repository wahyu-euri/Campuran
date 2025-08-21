// KODE JAVASCRIPT DASAR
// let Nama = "Eurisko wahyu";;
// let Umur = 16;
// console.log(Nama + " Berumur " + Umur + " Tahun");

// ANGKA DAN OPERASI MATEMATIKA
// let angka1 = prompt("Masukkan angka pertama: ");
// let angka2 = prompt("Masukkan angka kedua: ");
// let operasi = prompt("Masukkan operasi (+, -, *, /): ");
// let hasil;
// if (operasi === "+") {
//     hasil = parseFloat(angka1) + parseFloat(angka2);
// }
// else if (operasi === "-") {
//     hasil = parseFloat(angka1) - parseFloat(angka2);
// }
// else if (operasi === "*") {
//     hasil = parseFloat(angka1) * parseFloat(angka2);
// }
// else if (operasi === "/") {
//     hasil = parseFloat(angka1) / parseFloat(angka2);
// }
// else {
//     console.log("Operasi tidak dikenali");
//     hasil = "TIDAK ADA PERHITUNGAN YANG DILAKUKAN";
// }
// console.log("Hasil perhitungannya adalah : " + hasil);

//MENENTUKAN BILANGAN GENAP ATAU GANJIL
// let angka = prompt("Masukkan sebuah angka: ");
// if (angka % 2 === 0) {
//     console.log(angka + " adalah bilangan genap.");
// } else {
//     console.log(angka + " adalah bilangan ganjil.");
// }

//Membuat variabel dengan let
// var foo = "Belajar ECMAScript 6";
// console.log(foo); 
// foo = "React Uncover";
// console.log(foo); 
// let bar = "Belajar ECMAScript 6";
// console.log(bar); 
// bar = "React Uncover";
// console.log(bar); 

// Membuat konstanta dengan const
// let foo = "Belajar JavaScript";
// const bar = "Belajar JavaScript";

// foo = "Belajar React";
// bar = "Belajar React";
// console.log(foo);
// console.log(bar);

//Template string
// const foo = "JavaScript";
// const bar = "React";

// console.log("Belajar " + foo + " dan " + bar);
// console.log(`Belajar ${foo} dan ${bar}`);

//Conditional operator
// const user = "Eurisko";
// let result = "";

// if (user === "Eurisko") {
// result = "Welcome, admin";
// }
// else {
// result = "User not found";
// }

// console.log(result);

//short circuit conditional
// let user = "Eurisko";
// let password = "12345";

// if ((user === "Eurisko") && (password === "12345")) {
// console.log("Welcome, admin")
// }
// else if ((user === "Eurisko") && (password !== "12345")) {
// console.log("Password salah")
// }
// else if ((user !== "Eurisko") && (password === "12345")) {
// console.log("User tidak ditemukan")
// }
// else {
// console.log("User dan password salah")
// }

//Arrow nation
// const greet = (name) => {
//     return `Hello, ${name}`;
// };
// console.log(greet("Eurisko"));
// const greet = name => `Hello, ${name}`;
// console.log(greet("Eurisko"));

// const generateRandom = (start = 1, end = 10) =>
// Math.floor(Math.random() * (end - start + 1)) + start;

// console.log(generateRandom());
// console.log(generateRandom(5));
// console.log(generateRandom(10, 20));

