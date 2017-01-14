import { log, logTitle } from '../modules/WindowLogger';

export default () => {

    logTitle('Sets');

    const names = new Set();
    names.add('Anna');
    names.add('Alex');
    names.add('Jim');
    names.add('John');
    names.add('Dep');
    names.add('Shige');

    log(`Name size is ${names.size}`);
    names.forEach(name => log(name));

    const hasAlex = names.has('Alex');
    log(hasAlex);
}