//class
export class Accountant {
  //properties
  name: string;
  department: string;

  constructor(name: string, department: string) {
    this.name = name;
    this.department = department;
  }

  //behavior
  collectMoney() {
    console.log('money is collected by', this.name);
  }
  askForInformation() {
    console.log('information was asked by', this.name);
  }
  giveUsBill() {
    console.log('bill was given by', this.name);
  }
}
