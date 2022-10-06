export default class Character  {
  constructor(charName,charCar) {
    this.charName = charName;
    this.charCar = charCar;
    this.playerLvl = 1;
    this.horsePower = 0;
    this.torque = 0;
    this.nos = 0;
    this.abilities = [];
  }

  setAttributes() {
    if  (this.charCar === "electric") {
      this.horsePower = 100;
      this.torque = 800;
      this.nos = 0;
    } else if (this.charCar === "tuner") {
      this.horsePower = 300;
      this.torque = 200;
      this.nos = 400;
    } else if (this.charCar === "muscle") {
      this.horsePower = 800;
      this.torque = 300;
      this.nos = 100;
    } else if (this.charCar === "bike") {
      this.horsePower = 1000;
      this.torque = 50;
      this.nos = 0;
    } else return "Pick a car or get a bus ticket!";
  }
}