import dayjs from "dayjs";

let now = dayjs();

// // ISO Standard
// console.log("ISO");
// console.log(now.format());
console.log("\nTime")
console.log(now.format("HH:mm:ss"));
console.log(now.format("h:mm:ss a"));