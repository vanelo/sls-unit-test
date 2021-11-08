'use strict';

const AWS = require('aws-sdk');
const { table } = require('console');
AWS.config.region = 'us-east-1';

function init(){
    process.env.GREETER_DYNAMODB_TABLE = sls-unit-test-names-table;
    process.env.BASE_URL = "my aws url"
}

module.exports = init;