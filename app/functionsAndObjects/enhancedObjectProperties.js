import { log, logTitle } from '../modules/WindowLogger';

export default function () {

    logTitle('Enhanced Object Properties');

    const calculator = (name) => {
        return {
            name,
            add(n1, n2) {
                return n1 + n2;
            }
        }
    }

    const calc = calculator('casio');
    log(calc.name);
    log(calc.add(3, 2));
};