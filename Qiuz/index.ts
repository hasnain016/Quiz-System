#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log("");

let order = chalk.blueBright.bold("Cli Quiz System");
let order1 = chalk.redBright.bold("Hasnain Atif");
console.log(
  chalk.yellow(`------Welcome to the ${order} program made by ${order1} ------`)
);

const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message: chalk.yellowBright.bold("What is TypeScript primarily used for?"),
    choices: [
      "1. Memory Management",
      "2. Dynamic Typing",
      "3. Static Typing",
      "4. Asynchronous operations",
    ],
  },
  {
    name: "question_2",
    type: "list",
    message: chalk.yellowBright.bold(
      "Which of the following is NOT a valid TypeScript data type?"
    ),
    choices: ["1. void", "2. any", "3. dynamic", "4. tuple"],
  },
  {
    name: "question_3",
    type: "list",
    message: chalk.yellowBright.bold(
      "How do you denote a variable as readonly in TypeScript?"
    ),
    choices: ["1. const", "2. static", "3. readonly", "4. fixed"],
  },
  {
    name: "question_4",
    type: "list",
    message: chalk.yellowBright.bold(
      "How do you specify that a function does not return anything in TypeScript?"
    ),
    choices: [
      "1. function myFunc(): undefined",
      "2. function myFunc(): void",
      "3. function myFunc(): null",
      "4. function myFunc(): None",
    ],
  },
  {
    name: "question_5",
    type: "list",
    message: chalk.yellowBright.bold(
      "How do you define a custom type in TypeScript?"
    ),
    choices: ["1. interface", "2. typedef", "3. type", "4. Both A and C"],
  },
]);

let score: number = 0;

switch (quiz.question_1) {
  case "3. Static Typing":
    console.log(chalk.blueBright.bold("1. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.redBright.bold("1. InCorrect!"));
}

switch (quiz.question_2) {
  case "3. dynamic":
    console.log(chalk.blueBright.bold("2. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.redBright.bold("2. InCorrect!"));
}

switch (quiz.question_3) {
  case "3. readonly":
    console.log(chalk.blueBright.bold("3. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.redBright.bold("3. InCorrect!"));
}

switch (quiz.question_4) {
  case "2. function myFunc(): void":
    console.log(chalk.blueBright.bold("4. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.redBright.bold("4. InCorrect!"));
}

switch (quiz.question_5) {
  case "4. Both A and C":
    console.log(chalk.blueBright.bold("5. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.redBright.bold("5. InCorrect!"));
}

console.log(chalk.greenBright.bold(`Score: ${score}`));
