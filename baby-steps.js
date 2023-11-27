const args = process.argv.slice(2);

let sum = 0;

for (const arg of args) {
  sum += Number(arg);
}

console.log(sum);
