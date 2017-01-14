import { log, logTitle } from '../modules/WindowLogger';

export default function () {
    logTitle('Template Literal');

    const name = 'Maria';
    const surname = 'Jones';
    const age = '33';

    log(`Name ${name} ${surname} Age ${age}`);
};