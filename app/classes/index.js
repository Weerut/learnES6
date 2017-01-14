import { log, logTitle } from '../modules/WindowLogger';
import Person from './Person';
import Dog from './Dog';

export default () => {

    logTitle('Classses');
    Person.getObjectType();

    const person = new Person('Weerut', 33);
    person.toString();
    log(person.getName());
    log(person.getAge());

    const dog = new Dog('Henry', 'わんわん');
    dog.displayBarkSound();

}