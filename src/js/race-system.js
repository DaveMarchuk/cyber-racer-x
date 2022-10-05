//should add utility runback function to edit object instance based on 
//stage/level of Game.
import { Character } from "./character.js";

// Utility Logic

function rollDice(carType) {// refactor code 
  let finalScore = 0;

  if (carType === "tuner") {
    diceType = 0;
  } else if  (carType === "electric")  {
    diceType = 6;
  } else if (carType === "muscle") {
    diceType = 8;
  } else if (carType === "bike") {
    diceType = 12;
  } else if  (carType === "monster truck") {
    diceType = 4;
  } else diceType = 3;

  let dieRoll = Math.floor((Math.random() * 6) + 1);
  console.log(dieRoll);
  return dieRoll;
}

export default class RaceSystem {
  constructor(playerCharacter, npcEnemy, stage) {
    this.playerOne = playerCharacter;
    this.playerTwo = npcEnemy;
    this.stage = stage;
    this.carDice = 0;
  }

  runRace() {
    let p1 = this.playerOne;
    let npc = this.playerTwo;
    p1.carDice = rollDice();
    npc.carDice = rollDice("monster truck");
    console.log(p1.carDice);
    console.log(npc.carDice);

    if (p1.carDice > npc.carDice) {
      return true;
    } else return false;
  }
}