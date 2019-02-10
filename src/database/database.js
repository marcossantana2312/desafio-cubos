const lowdb = require('lowdb');
const fs = require('lowdb/adapters/FileSync');

const adapter = new fs('db.json')

const db = lowdb(adapter);

const regraAtendimento = require('../models/Atendimento');

db.defaults({regraAtendimento})
    .write();

module.exports = db;