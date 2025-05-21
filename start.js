// Right Triangle with 5 rows
for (let i = 1; i <= 5; i++) {
  let stars = "*".repeat(i);
  console.log(stars);
}

// Left Triangle with 5 rows
for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(i);
  console.log(spaces + stars);
}

// Pyramid Pattern
for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
// Diamond Pattern
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}
for (let i = 4; i >= 1; i--) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}

// Inverted Triangle
for (let i = 5; i >= 1; i--) {
    let stars = '*'.repeat(i);
    console.log(stars);
}

// X Pattern
for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j < 5; j++) {
        if (i === j || i + j === 4) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}

// Heart Pattern
console.log('  *   *  ');
console.log('*   *   *');
console.log(' *     * ');
console.log('  *   *  ');
console.log('    *    ');

// Arrow Pattern
for (let i = 1; i <= 5; i++) {
    console.log(' '.repeat(i - 1) + '*'.repeat(5 - i + 1));
}
for (let i = 4; i >= 1; i--) {
    console.log(' '.repeat(i - 1) + '*'.repeat(5 - i + 1));
}