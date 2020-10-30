const { LOADIPHLPAPI } = require("dns");
const express = require("express");
const Queries = express();
const QueriesDB = require("../model/Queries")
const unirest = require("unirest");


// API user
// 1 create new user
Queries.post("/sing",(req,res)=>{
    var data = {
        First_Name : req.body.First_Name,
        Last_Name : req.body.Last_Name,
        Email : req.body.Email,
        Password : req.body.Password,
        Image : req.body.Image
    }
    QueriesDB.sign_in(data)
    .then(()=>{
        res.send("inserted data................")
    }).catch((err)=>{
        res.send(err)
        console.log(err);
    })
});

// 2 create new details_Image
Queries.post("/postdetails/:ID",(req,res)=>{
    let ID = req.params.ID
    QueriesDB.dataid(ID)
    .then((Response) => {
        var First_Name = Response[0]["First_Name"]
        var data = {
            Name_of_Image : req.body.Name_of_Image,
            Height_of_image : req.body.Height_of_image,
            width_of_image : req.body.width_of_image,
            Size_of_image : req.body.Size_of_image,
            Extension_of_image : req.body.Extension_of_image,
            person_uploads : First_Name,
            Location_of_image : req.body.Location_of_image
        }
        QueriesDB.postdetails(data)
        .then(()=>{
            res.send("inserted data................")
        }).catch((err)=>{
            res.send(err)
            console.log(err);
        })
    })
});

// 3 list of all images with details
Queries.get("/dataAll_list",(req,res) => {
    QueriesDB.dataAll_list()
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

// 4 showing the location of place wherever the image
Queries.get("/dataAll_location/:search",(req,res) => {
    var search = req.params.search
    QueriesDB.get_search(search)
    .then((Date) => {
        var Name_of_Imagesearch = Date[0]["Name_of_Image"]
    QueriesDB.dataAll_list()
    .then((Response) => {
        for(var i = 0; i < Response.length; i ++){
            var Name_of_Image = Response[i]["Name_of_Image"]
            var Location_of_image = Response[i]["Location_of_image"]
            if(Name_of_Image == Name_of_Imagesearch){
                res.send(Location_of_image)
            }
        }
        // res.send("No data with this name")
    })
    }).catch((err) => {
        res.send(err)
    })
});


Queries.get("/current_location/:search", (req, res) => {
    var search = req.params.search
    QueriesDB.get_search(search)
    .then((Date) => {
        var Location_of_image = Date[0]["Location_of_image"]
        if(Location_of_image == 'Null'){
            var apiCall = unirest("GET",

                "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"

            );

            apiCall.headers({

                "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",

                "x-rapidapi-key": "srclZqaa9imshAk9Xzz55u27oltLp1SqdiFjsnmva9PTpf2j3f"

            });

            apiCall.end(function(result) {

                if (res.error) throw new Error(result.error);

                console.log(result.body);

                res.send(result.body);

            });
        }
    })
});


module.exports = Queries
