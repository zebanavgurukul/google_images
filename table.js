// const knex = require("./connection"); 

// module.exports = knex;

// knex.schema.hasTable('user').then((exists) => {
//     if (!exists) {
//         return knex.schema.createTable('user', (table) => {
//             table.increments('ID')
//             table.string('First_Name')
//             table.string('Last_Name')
//             table.string('Email')
//             table.string('Password')
//             table.string('Image')
//         })
//         .catch((err) => {
//             console.log(err,"There is some err while writing the quety")
//         })
//     }
//     return console.log('table is created!')
// });
