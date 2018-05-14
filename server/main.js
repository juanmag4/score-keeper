import { Players } from "../imports/api/players";
import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
    class Person {
        constructor(name = 'Anonymous', age = '0') {
            this.name = name;
            this.age = age;
        }

        getGreeting(){
            return `Hi I'm ${this.name}`;
        }

        getDescription(){
            return `${this.name} is ${this.age} year(s) old.`;
        }
    }

    class Employee extends Person {
        constructor(name, age, title){
            super(name, age);
            this.title = title;
        }

        hasJob() {
            return !!this.title;
        }

        getGreeting() {
            if (this.title) {
                return `Hi I'm ${this.name} and I'm a ${this.title}`;
            } else {
                return super.getGreeting();
            }
        }
    }

    class Programer extends Person {
        constructor(name, age, preferredLanguage = 'Asembly'){
            super(name, age);
            this.preferredLanguage = preferredLanguage;
        }

        getGreeting() {
            return `Hi I'm ${this.name} and I'm a ${this.preferredLanguage} developer.`;
        }
    }

    let person = new Employee("Juan Manuel", 29, 'Developer');
    console.log(person.getGreeting());

    let anotherPerson = new Employee("Mike", 66, 'Accountant');
    console.log(anotherPerson.getGreeting());

    let programer = new Programer("TOTO", 56, "React");
    console.log(programer.getGreeting());
});