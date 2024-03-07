import dayjs from "dayjs";

const startDate = dayjs("2023-09-23");
const todaysDate = dayjs("2023-10-30");

let difference = startDate.diff(todaysDate, "day");
console.log(difference);
