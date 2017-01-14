import { log, logTitle } from '../modules/WindowLogger';

export default function () {

    logTitle('Default parmater');

    const calculatePay = (param1, param2 = {
        first: 200,
        second: 300
    }) => {
        log(`Param 1 is ${param1} : Param2 is  + ${param2.first + param2.second}`)
    }
    calculatePay(10,{first:2,second:10});
};