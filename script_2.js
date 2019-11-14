let num = prompt('De quel nombre veux-tu calculer la factorielle');

function factorial(num) {
  return num ? num * factorial(num - 1) : 1;
}


console.log(`Le résultat est ${factorial(num)}`);