---
sidebar_position: 4
---

# Setup Handler

## Write core logic of the lambda

Start by creating a file handler.js

```js title="handler.js"
"use strict";
const {
  InternalServerError,
  BadRequest,
  NotFound,
  lambdaResponse,
} = require("mern-common-layer");
const { getLogger } = require("mern-logging-layer");
const { getItem, putItem } = require("mern-database-layer");

let logger = getLogger();

module.exports.checkExisting = async (event) => {
  logger.info("***Lambda Started***");

  return lambdaResponse({
    statusCode: 200,
    body: event,
  });

```
