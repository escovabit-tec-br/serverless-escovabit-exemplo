"use strict";
const { DynamoDB } = require("aws-sdk");
const db = new DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

module.exports.getAll = async (event) => {
  try {
    const filmes = await db.scan({ TableName }).promise();
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
