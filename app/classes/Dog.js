import { log, logTitle } from '../modules/WindowLogger';
import Animal from './Animal';

export default class Dog extends Animal {

    constructor(name, barkSound) {
        super(name);
        this.barkSound = barkSound;
    }
    displayBarkSound() {
        const dogName = super.getAnimalName();
        log(`${dogName} barks like ${this.barkSound}`);
    }
}