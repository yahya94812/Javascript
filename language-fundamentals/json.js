// 2. JSON (JavaScript Object Notation)
// JSON (JavaScript Object Notation) is a lightweight, text-based data format used for storing and exchanging data in a human-readable and machine-parsable way. It is commonly used for transmitting data between a server and a web application as an alternative to XML.
// JSON is a subset of JavaScript object syntax, but it has its own rules and restrictions. In JSON, keys must be strings enclosed in double quotes, and values can be strings, numbers, booleans, arrays, objects, or null. Functions and undefined values are not allowed in JSON.
const jsonString = '{"name": "Yahya", "age": 20, "isStudent": true}';
const jsonObject = JSON.parse(jsonString); // Convert JSON string to JavaScript object
console.log(jsonObject.name); // Output: Yahya
console.log(jsonObject.age);  // Output: 20
console.log(jsonObject.isStudent); // Output: true

const newJsonString = JSON.stringify(jsonObject); // Convert JavaScript object to JSON string
console.log(newJsonString); // Output: {"name":"Yahya","age":20,"isStudent":true}