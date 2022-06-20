"use strict";
const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

module.exports.getById = async (event) => {
  try {
    const Key = {
      id: event.pathParameters.id,
    };
    const filmes = await db.get({ TableName, Key }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(filmes),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: {
        err: JSON.stringify(err),
        event: JSON.stringify(event),
      },
    };
  }
};
