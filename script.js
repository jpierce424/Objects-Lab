let playerChar = {
type: "Black Knight",
numLegs: 2,
numArms: 2,
quote: function(){ return "Tis but a scratch."}
};

console.log(playerChar.numArms);
console.log(playerChar.numLegs);
console.log(playerChar.type);

playerChar.numArms = playerChar.numArms - 1;
console.log("You have "+ playerChar.numArms+"arms " +playerChar.quote());

playerChar.numArms = playerChar.numArms - 1;
console.log("You have "+ playerChar.numArms+"arms " +playerChar.quote());

playerChar.numArms = playerChar.numLegs - 1;
console.log("You have "+ playerChar.numArms+"arms " +playerChar.quote());

playerChar.numArms = playerChar.numLegs - 1;
console.log("You have "+ playerChar.numArms+"arms " +playerChar.quote());



document.getElementById("demo").innerHTML = playerChar.type