import { log, logTitle } from '../modules/WindowLogger'

export default () => {
    logTitle('Spread On Object');

    const personName = {
        firstName: 'Alex',
        surname: 'Untterainer',
        middleName: 'Jones'
    };

    const address = {
        city: 'London',
        postCode: 'E10'
    }

    const person = {
        ...personName, ...address
    }

    log(JSON.stringify(person, null, 2));
}