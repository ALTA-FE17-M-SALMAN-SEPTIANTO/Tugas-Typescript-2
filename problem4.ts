function palindrome(string: string): boolean {
    const processedString = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const reversedString = processedString.split('').reverse().join('');

    return processedString === reversedString;
}

// Test Cases
console.log(palindrome("civic"));               // true
console.log(palindrome("katak"));               // true
console.log(palindrome("kasur rusak"));         // true
console.log(palindrome("kupu-kupu"));           // false
console.log(palindrome("lion"));                // false
console.log(palindrome("hati"));                // false
console.log(palindrome("tamat-tamat"));         // true
console.log(palindrome("ibu ratna antar ubi")); // true