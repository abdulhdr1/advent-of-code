import { readFileSync } from "node:fs";
const input = readFileSync("./2022/02/input.txt", { encoding: "utf-8" });

let aScore = 0;
let bScore = 0;
const rounds = input.split("\n");

const aMap = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
};
const bMap = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const pointsMap = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

function calculateWinner(aMove, bMove) {
  if (aMove === "Rock") {
    if (bMove === "Scissors") return "a";
    if (bMove === "Paper") return "b";
    return "draw";
  }
  if (aMove === "Paper") {
    if (bMove === "Rock") return "a";
    if (bMove === "Scissors") return "b";
    return "draw";
  }
  if (aMove === "Scissors") {
    if (bMove === "Paper") return "a";
    if (bMove === "Rock") return "b";
    return "draw";
  }
  throw Error;
}

rounds.map((round) => {
  const [aMove, bMove] = round.split(" ");
  const winner = calculateWinner(aMap[aMove], bMap[bMove]);
  if (winner === "a") {
    aScore += 6;
  } else if (winner === "b") {
    bScore += 6;
  } else {
    aScore += 3;
    bScore += 3;
  }
  aScore += pointsMap[aMap[aMove]];
  bScore += pointsMap[bMap[bMove]];
});

console.log(aScore, bScore);
