import { add as additional, mod, subtract, pi as PI } from './math';
import { log, logTitle } from '../WindowLogger';

export default function () {
    logTitle('Multiple Default Exports');
    log(additional(10, 10));
    log(mod(10, 10));
    log(subtract(10, 10));
    log(PI)
}