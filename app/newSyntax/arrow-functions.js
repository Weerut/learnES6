import { log, logTitle } from '../modules/WindowLogger';

export default function () {

    logTitle('=> allow functions');

    const alertMyname = () => {
        alert('Nelson');
    }

    const mileToKilo = miles => miles * 1.60934;

    alertMyname();
    log(mileToKilo(10));
};