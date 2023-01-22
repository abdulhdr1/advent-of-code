import { readFileSync } from "fs";

const input = readFileSync("2022/03/input.txt", "utf-8");
console.time("03/22");
const inputSplit = input.split("\n");

let sum = 0;

for (let i = 0, j = 0; i < inputSplit.length; i++) {
	const line = inputSplit[i];
	const firstPart = line.slice(0, Math.floor((line.length + 1) / 2));
	const secondPart = line.replace(firstPart, "");
	const firstPartSplit = firstPart.split("");

	for (let i in firstPartSplit) {
		if (secondPart.includes(firstPartSplit[i])) {
			let unicode = firstPartSplit[i].charCodeAt(0);

			if (unicode > 96) {
				sum += unicode - 96;
				break;
			}

			sum += unicode - 64 + 26;
			break;
		}
	}
}

console.timeEnd("03/22");

console.log(sum);

export {};
