import RaceSystem from "./../src/js/race-system.js";
import Character from "./../src/js/character.js";

describe("Race system", () => {
  test('Based on game stage will determine NPC enemy and battle specifics.', () => {
    const charName = "Dave";
    const charCar = "electric";
    const stage = 1;
    
    const playerCharacter = new Character(charName,charCar);
    const npcEnemy = new Character("Big Bubba","monster truck"); //need to add utility
    const newRace = new RaceSystem(playerCharacter, npcEnemy, stage);
    expect(newRace.playerOne).toEqual(playerCharacter);
    expect(newRace.playerTwo).toEqual(npcEnemy);
    expect(newRace.stage).toEqual(1);
  });

  test('it should take playerOne input and npc input to determine winner', () => {
    const charName = "Dave";
    const charCar = "electric";
    const stage = 1;
    
    const playerCharacter = new Character(charName,charCar);
    const npcEnemy = new Character("Big Bubba","monster truck"); //need to add utility
    const newRace = new RaceSystem(playerCharacter, npcEnemy, stage);
    
    expect(newRace.runRace()).toEqual(false);
    expect(newRace.runRace()).toEqual(true);
  });

  //test('it should increment player dice rolls to sum up to a given length for a race stage')
})