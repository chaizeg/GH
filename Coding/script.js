var clearbit = require('clearbit');
var clearbit = require('clearbit')('sk_33c87335fdbc6fcca9a80e60c5bacf64');
var NameToDomain = clearbit.NameToDomain;
//
//
// NE MARCHE PAS AVEC DES CARACTERES SPECIAUX EN ENTREES !!!!
// Essayer requete http
//
//
xlsxj = require("xlsx-to-json");
xlsxj({
        input: "BDD_client.xlsx", 
        output: "output.json"
    }, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        var jsonBD = result;
        
    for (var i in jsonBD){
            NameToDomain.find({name: ''+jsonBD[i].name})
                .nodeify(function (err, result) {
                    if(err){
                        //
                    }
                    else {
                        newJsonLine = "{\"name\" : \""+result.name+"\" , \"domain\" : \""+result.domain+"\" }"
                        newJsonLine = "["+newJsonLine+"]"
                        console.log(newJsonLine)
                    }
                })
            }
        }/*
                .catch(NameToDomain.NotFoundError, function (err) {
                    //console.log(err); // Domain could not be found
                })
                .catch(function (err) {
                    //console.log('Bad/invalid request, unauthorized, Clearbit error, or failed request');
                })*/
    
//$.GET() "https://company.clearbit.com/v1/domains/find?name=:result[0].name"
});

    