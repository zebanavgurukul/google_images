const knex = require("./connection"); 

module.exports = knex;

knex.schema.hasTable('user').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('user', (table) => {
            table.increments('ID')
            table.string('First_Name')
            table.string('Last_Name')
            table.string('Email')
            table.string('Password')
            table.string('Image')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});

knex.schema.hasTable('details_Image').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('details_Image', (table) => {
            table.increments('ID')
            table.string('Name_of_Image')
            table.string('Height_of_image')
            table.string('width_of_image')
            table.string('Size_of_image')
            table.string('Extension_of_image')
            table.string('person_uploads')
            table.string('Location_of_image')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});
