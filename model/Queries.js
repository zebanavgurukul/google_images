const knex = require("../connection"); 

// 1 Sign_in
let sign_in = (data) => {
    return knex("user").insert(data)
};

// 2 get a user by user id
let dataid = (ID) => { 
    return knex.select('*').from('user').where('user.ID',ID)
};

// 2.1 Create a new details_Image
let postdetails = (data) => {
    return knex("details_Image").insert(data)
};

// 3 list of all images with details
let dataAll_list = () => {
    return knex('user')
    .select('details_Image.Name_of_Image', 'Height_of_image','width_of_image','Size_of_image','Extension_of_image','person_uploads','Location_of_image','user.Image')
    .join('details_Image','user.ID','=','details_Image.ID')
};

// 4 4 showing the location of place wherever the image
let get_search = (search) => {
    return knex("user")
    .join('details_Image','user.ID','=','details_Image.ID')
    .select('details_Image.Name_of_Image', 'Height_of_image','width_of_image','Size_of_image','Extension_of_image','person_uploads','Location_of_image','user.Image')
    .where('Name_of_Image','like',  '%' +search+ '%')
};

module.exports = {sign_in,dataid,postdetails,dataAll_list,get_search}