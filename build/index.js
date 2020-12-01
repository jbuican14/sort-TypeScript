"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Print Number List of [10, 3, -5, 0]');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Print Character Sort of Xaay');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
var characterCollection = new CharactersCollection_1.CharactersCollection('Xaay');
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Print Linked List of 500, -10, -3, 4 ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
linkedList.sort();
linkedList.print();
