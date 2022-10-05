//should add utility runback function to edit object instance based on 
//stage/level of Game.
import { Character } from "./character.js";

// Utility Logic

function rollDice(Character) {// refactor code 
  //let finalScore = 0
  let dieRoll = Math.floor((Math.random() * 6) + 1);
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
    let p1RollTotal = 0;
    let npcRollTotal = 0;
    let flag = false;

    while (flag === false) {
      console.log("for loop starts");
      p1.carDice = rollDice();
      npc.carDice = rollDice();
      p1RollTotal += p1.carDice;
      npcRollTotal += npc.carDice;
      console.log(p1RollTotal);
      console.log(npcRollTotal);
      if  (p1RollTotal >= 100) {
        console.log("100 for p1");
        flag = true;
        return true;
      } else if (npcRollTotal >= 100)  {
        console.log("100 for NPC");
        flag = true;
        return false;
      } else; 
    }
  }
}