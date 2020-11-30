import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('Xaay');
const sorter1 = new Sorter(characterCollection);
sorter1.sort();
console.log(characterCollection.data);
