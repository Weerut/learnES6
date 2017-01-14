import { log, logTitle } from '../modules/WindowLogger';

export default () => {

    logTitle('Maps');

    const map = new Map();
    map.set('name', 'Anna');
    map.set('age', 33);
    map.set('age', 40);

    log(`Size is ${map.size}`);
    log(`Age = ${map.get('age')}`);

    log(`Size is ${map.size}`);

    map.set('favFood', 'apples');

    // map.forEach((key, value) => {
    //     log(`(key,value) = (${key},${value})`);
    // });

    for (const key of map.keys()) {
        log(`(key,value) = (${key},${map.get(key)})`);
    }

}