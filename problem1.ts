/** @format */

function deskripsiNilai(nilai: number): string {
  if (nilai < 0 || nilai > 100) {
    return "Invalid";
  } else if (nilai >= 80) {
    return `mendapat nilai A`;
  } else if (nilai >= 65) {
    return `mendapat nilai B+`;
  } else if (nilai >= 50) {
    return ` mendapat nilai B`;
  } else if (nilai >= 35) {
    return `mendapat nilai C`;
  } else {
    return `mendapat nilai D`;
  }
}

console.log(deskripsiNilai(40));

