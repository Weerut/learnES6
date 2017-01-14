import pi from './pi';
import api from './api';
import Person from './person';

import { log, logTitle } from '../WindowLogger';

export default function () {
    logTitle('Single Default Exports');
    log(api("my name"));
    var person = new Person();
    log(person.getName());
}