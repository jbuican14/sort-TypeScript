import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Print Number List of [10, 3, -5, 0]');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Print Character Sort of Xaay');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
const characterCollection = new CharactersCollection('Xaay');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Print Linked List of 500, -10, -3, 4 ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
linkedList.sort();
linkedList.print();
