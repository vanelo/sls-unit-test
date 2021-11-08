'use strict';

const dynamoDBPort = require('../source/dynamoDBPort');
const mockDatabaseConnector = require('../source/dynamoDBConnector');

describe('getItem', () => {
    test('get existing item', async ()=> {
        const item = {
            name: 'Sofia',
            timestamp: Date.now()
        };

        mockDatabaseConnector.getItem = jest.fn().mockReturnValue(item);

        const result = await dynamoDBPort.getItem('Sofia');

        const paramsToValidate = {
            Key: {
                name: 'Sofia'
            },
            TableName: undefined
        };

        expect(mockDatabaseConnector.getItem).toBeCalledWith(paramsToValidate);
        expect(result).toBe(item);
    });
});