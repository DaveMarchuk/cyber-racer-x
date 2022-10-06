import { TestScheduler } from "jest";
import Character from "./../src/js/character.js";

describe("Character", () => {
  test('should create a new character object with level, attributes, car type', () => {
    const charName = "Dave";
    const charCar = "electric";
    
    const newCharacter = new Character(charName,charCar);
    expect(newCharacter.charName).toEqual(charName);
    expect(newCharacter.charCar).toEqual(charCar);
  });

  test('should set attributes for horsepower,torque,nos for the electric car class', ()=> {
    const charName = "Dave";
    const charCar = "electric";
    
    const newCharacter = new Character(charName, charCar);
    newCharacter.setAttributes();
    expect(newCharacter.horsePower).toEqual(100);
    expect(newCharacter.torque).toEqual(800);
    expect(newCharacter.nos).toEqual(0);
    expect(newCharacter.playerLvl).toEqual(1);
  })

  test('should set attributes for horsepower,torque,nos for the tuner car class', ()=> {
    const charName = "Dave";
    const charCar = "tuner";
    
    const newCharacter = new Character(charName, charCar);
    newCharacter.setAttributes();
    expect(newCharacter.horsePower).toEqual(300);
    expect(newCharacter.torque).toEqual(200);
    expect(newCharacter.nos).toEqual(400);
    expect(newCharacter.playerLvl).toEqual(1);
  })

  test('should set attributes for horsepower,torque,nos based on the muscle car class', ()=> {
    const charName = "Dave";
    const charCar = "muscle";
    
    const newCharacter = new Character(charName, charCar);
    newCharacter.setAttributes();
    expect(newCharacter.horsePower).toEqual(800);
    expect(newCharacter.torque).toEqual(300);
    expect(newCharacter.nos).toEqual(100);
    expect(newCharacter.playerLvl).toEqual(1);
  })

  test('should set attributes for horsepower, torque, nos for the bike class', ()=> {
    const charName = "Dave";
    const charCar = "bike";
    
    const newCharacter = new Character(charName, charCar);
    newCharacter.setAttributes();
    expect(newCharacter.horsePower).toEqual(1000);
    expect(newCharacter.torque).toEqual(50);
    expect(newCharacter.nos).toEqual(0);
    expect(newCharacter.playerLvl).toEqual(1);
  })

  test('should return a string stating to pick a car or receive a bus ticket', () => {
    const charName = "Dave";
    const charCar = "taurus";
    const newCharacter = new Character(charName, charCar);
    expect(newCharacter.setAttributes()).toMatch("Pick a car or get a bus ticket!");
  })
});