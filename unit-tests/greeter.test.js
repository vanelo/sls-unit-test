'use strict';

const { expect } = require('@jest/globals');
const greeter = require('../source/greeter');

describe('sayHello', () => {
    test('Undefined name grret', () => {
        const greet = greeter.sayHello();
        expect(greet).toBe('Hello world');
    });

    test('With a name', ()=> {
        const greet = greeter.sayHello('Marcia');
        expect(greet).toBe('Hello Marcia');
    })
})