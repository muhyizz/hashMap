const HashMap = require("./hash");

const hashMap = new HashMap();

console.log("key");
console.log(hashMap.keys());
console.log("\n");
console.log("values");
console.log(hashMap.values());

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");

console.log("key2");
hashMap.keys();
console.log("\n");
console.log("values");
hashMap.values();

// hashMap.set("carrot", "orange");
// hashMap.set("dog", "brown");
// hashMap.set("elephant", "gray");
// hashMap.set("frog", "green");
// hashMap.set("grape", "purple");
// hashMap.set("hat", "black");
// hashMap.set("ice cream", "white");
// hashMap.set("jacket", "blue");
// hashMap.set("kite", "pink");
// hashMap.set("lion", "golden");
console.log(hashMap.length());
// hashMap.set("unknown", undefined);

console.log("\n");
console.log(hashMap.bucketsCount());

console.log("\n");
hashMap.entries();

console.log("key");
console.log(hashMap.keys());
console.log("\n");
console.log("values");
console.log(hashMap.values());

hashMap.set("lion", "rave");

console.log("\n");
console.log(hashMap.bucketsCount());

console.log("key");
console.log(hashMap.keys());
console.log("\n");
console.log("values");
console.log(hashMap.values());

// console.log("\n");
// hashMap.entries();

// console.log("\n");
// console.log(hashMap.bucketsCount());

// hashMap.set("moon", "silver");
// hashMap.set("medal", "silver");
// hashMap.set("spoon", "silver");
// hashMap.set("ring", "silver");

// console.log("\n");
// console.log(hashMap.bucketsCount());
// console.log(hashMap.get("apple"));
// console.log(hashMap.has("ring"));
// console.log("\n");
// console.log("key");
// console.log(hashMap.keys());
// console.log("\n");
// console.log("values");
// console.log(hashMap.values());
// console.log("\n");
// console.log("length");
// console.log(hashMap.length());

// console.log("clear");
// hashMap.clear();
// hashMap.entries();
