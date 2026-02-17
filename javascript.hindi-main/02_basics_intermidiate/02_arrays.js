const marvelHeroes = [ "ironman ", "spiderman ", "thor ", "hulk ", "blackwidow " ];

const dcHeroes = [ "batman ", ["superman ", "wonderwoman "], "flash ", "aquaman " ];

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes[5] [2]);

// const allHeros = marvelHeroes.concat(dcHeroes);
// console.log(allHeros);

// const allHeros2 = [ ...marvelHeroes, ...dcHeroes ];
// console.log(allHeros2);

const real_dcHeroes = dcHeroes.flat(1);
console.log(real_dcHeroes);

console.log(Array.isArray("shreyasPawade"));
console.log(Array.from({ name: "shreyasPawade" })); // intresting 

let count = 0;
let count2 = 10;
let count3 = 100;
let count4 = 1000;

console.log(Array.of (count, count2, count3, count4));

