let x = parseInt(prompt('valor 1'))
let y = parseInt(prompt('valor 2'))
let z = 0;
console.log(`valores iniciais ${x}, ${y}, ${z}`)

z = x; //salvando valor inicial do x    - z = 10
x = y; //igualei x e y    - x=30 y=30
y = z; //pegar o valor inicial do x que foi salvo no z y=10 e x=30
z = 0;

console.log(`valores finais ${x}, ${y}, ${z}`)