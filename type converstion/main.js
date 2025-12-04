console.log("10" + 5);   // "105"  (number → string)
console.log("10" - 5);   // 5      (string → number)
console.log(true + 1);   // 2      (boolean → number)
console.log("5" * "2");  // 10     (strings → numbers)


Number("25");  // 25
parseInt("25.8");  // 25
parseFloat("25.8"); // 25.8
Number("abc");  // NaN


String(123);      // "123"
(456).toString(); // "456"


Boolean(1);   // true
Boolean(0);   // false
Boolean("");  // false
Boolean("Hi"); // true
