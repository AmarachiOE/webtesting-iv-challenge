const db = require("../database/dbConfig.js");

module.exports = {
    getAll,
    getById,
}

function getAll() {
    return db('characters');
}

function getById(id) {
    return db('characters').where({ id }).first();
}