import { log, logTitle } from '../modules/WindowLogger';

export default class Animal{

    constructor(name){
        this.name = name;
    }
    getAnimalName(){
        return this.name;
    }

    
}