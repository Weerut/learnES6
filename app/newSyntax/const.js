import { log, logTitle } from '../modules/WindowLogger';

export default function () {
    logTitle('Const');

    // const name = "Maria";
    // log(name);

    // name = 1;
    // log(name);

    // name = {
    //     name: "MARIA"
    // }

    // log(JSON.stringify(name));

    const add = function (n1, n2) {
        log(n1 + n2);
    }

    add(2, 2);
}