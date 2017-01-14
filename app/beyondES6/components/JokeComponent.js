import React, { Component } from 'react';
import { coroutine as co } from 'bluebird';

export default class JokeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        co(function* () {
            const number = yield this.getRandomNumber();
            const jokeResponse = yield this.getChuckNorrisJoke(number);
            const jokes = yield jokeResponse.json();
            const {value: jokeArrays} = jokes;
            this.setState({ jokes: jokeArrays });
        }.bind(this))();
    }

    getRandomNumber() {
        const getRandomNumberPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 10);
                console.log(randomNumber);
                resolve(randomNumber);
            }, 2000)
        });
        return getRandomNumberPromise;
    }
    getChuckNorrisJoke(n) {
        return fetch(`http://api.icndb.com/jokes/random/${n}`);
    }

    render() {
        const {jokes: jokesArray} = this.state;
        const style={
            color:'blue'
        }
        const jokes = jokesArray.map((joke, key) => {
            return <li style = {style} key={key}>{joke.joke}</li>
        })
        return (
            <div>
                <h1>Jokes {this.state.jokes.length}</h1>
                <ol>{jokes}</ol>
            </div>
        );
    }
}