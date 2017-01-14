import { log, logTitle } from '../modules/WindowLogger';
import { coroutine as co } from 'bluebird';

export default () => {
    logTitle('Promise with Generators');

    const getRandomNumberPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10);
            log(randomNumber);
            resolve(randomNumber);
        }, 2000)
    });
    const getJokePromise = n => fetch(`http://api.icndb.com/jokes/random/${n}`);

    // getRandomNumberPromise.then(number => {
    //     getJokePromise(number).then(jokeResponse => {
    //         jokeResponse.json().then(jokes => {
    //             // log(JSON.stringify(jokes));
    //             const {value: jokeArrays} = jokes;
    //             jokeArrays.forEach(joke => log(joke.joke));
    //         })
    //     })
    // })

    co(function* () {
        const number = yield getRandomNumberPromise;
        const jokeResponse = yield getJokePromise(number);
        const jokes = yield jokeResponse.json();
        const {value: jokeArrays} = jokes;
        jokeArrays.forEach(joke => log(joke.joke));
    })();




}