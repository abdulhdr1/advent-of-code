import { readFileSync } from "node:fs";
const input = readFileSync("./2022/01/input.txt", { encoding: "utf-8" });

console.time("01/22");
const inputFormatted = input
	.split("\n\n")
	.map((mealsString) => mealsString.split("\n"));

const elfsMap = new Map();
let highest = 0;

for (const elf of inputFormatted) {
	const sum = elf.reduce((a, b) => Number(a) + Number(b));
	if (sum > highest) highest = sum;

	elfsMap.set(elfsMap.size, sum);
}
console.log(highest);
console.timeEnd("01/22");
