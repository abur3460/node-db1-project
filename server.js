const express = require('express');


const PostRouter = require('./data/accounts/accounts-router');



const server = express();
server.use(express.json());
server.use('/api/accounts', PostRouter);

module.exports = server;