'use strict';

const { afterAll } = require('@jest/globals');
const init = require('./utils/init');
const steps = require('./utils/steps');
const tearDown = require('./utils/tearDown');

describe('When we invoke the hello function', () => {
    test('With a name', async () => {
        const result = await steps.invokeGetHello('Marcia');
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('Hello Marcia');
    });
});

describe('When we invoke the moi function', () => {
    beforeAll(() => {
        init();
    });

    test('With a name', async() => {
        const result = await when.invokeGetMoi('Marcia');
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('Hello Marcia');
    });

    afterAll(async () => {
        await tearDown.removeDataFromTable('Marcia');
    });
});

describe('When we invoke the greet function with a name it exists', () => {
    beforeAll(async () =>{
        await steps.invokeGetMoi('Marcia');
    });

    test('With a name that exists', async () => {
        const result = await steps.invokeWasGreeted('Marcia');
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('Greet found');
    });

    afterAll(async () => {
        await tearDown.removeDataFromTable('Marcia');
    });
});

describe('When we invoke the greet function with a name it doesnt exist', () =>{
    beforeAll(async () => {
        init();
    });

    test('With a name that doesnt exist', async () => {
        const result = await when.invokeWasGreeted('Juan');
        expect(result.statusCode).toBe(404);
        expect(result.body).toBe('Greet not found');
    });
});