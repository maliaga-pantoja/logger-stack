const express = require('express')
const { createLogger, format, transports } = require("winston");

const app = express()
const port = 3000

 
const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  level:"debug",
  transports: [new transports.Console({})],
});

app.get('/', (req, res) => {
    logger.debug('this is just a test');
    res.json({
        "message": "ok"
    })
})

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
})
