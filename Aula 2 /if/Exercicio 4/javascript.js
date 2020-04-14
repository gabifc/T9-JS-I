let x = parseInt(prompt('valor 1'))
let y = parseInt(prompt('valor 2'))
let z = 0;
console.log(`valores iniciais ${x}, ${y}, ${z}`)

z = x;
x = y;
y = z;
z = 0;

console.log(`valores finais ${x}, ${y}, ${z}`)