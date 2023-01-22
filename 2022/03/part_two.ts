import { readFileSync } from "fs";

const input = readFileSync("2022/03/input.txt", "utf-8");
console.time("03/22");
const inputSplit = input.split("\n");

let sum = 0;

for (let i = 0, j = 0; i < inputSplit.length; i += 3) {
	const first = inputSplit[i];
	const second = inputSplit[i + 1];
	const third = inputSplit[i + 2];

	for (let letter of first.split("")) {
		if (second.includes(letter) && third.includes(letter)) {
			let unicode = letter.charCodeAt(0);

			if (unicode > 96) {
				sum += unicode - 96;
				break;
			}

			sum += unicode - 64 + 26;
			break;
		}
	}
}

console.log(sum);
console.timeEnd("03/22");

export {};
