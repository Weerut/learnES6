import { log, logTitle } from '../modules/WindowLogger';

export default () => {

    logTitle('Promises All');

    const namesPromise = new Promise((resolve, reject) => {
        const names = ['Alex', 'Anna', 'Maria'];
        setTimeout(() => {
            log('name resolved')
            resolve(names)
        }, 3000);
        setTimeout(() => {
            log('name rejected');
            reject('Reject');
        }, 1000);
    });

    const surnamesPromise = new Promise((resolve, reject) => {
        const surnames = ['SurAlex', 'SurAnna', 'SurMaria'];
        setTimeout(() => {
            log('surname resolved')
            resolve(surnames)
        }, 1000);
    });

    Promise
        .all([namesPromise, surnamesPromise])
        .then(data => {
            const [n, s] = data;
            log(n);
            log(s);
        }, err => {
            log(err);
        });
};