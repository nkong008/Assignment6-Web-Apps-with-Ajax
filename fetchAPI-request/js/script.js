
"use strict";

//fetch request
(function () {

    var url = "https://api.artic.edu/api/v1/artworks";

    fetch(url).then(function(response) {
        if (!response.ok) {
            // console.log("there was a problem");
            throw Error(response.statusText);
        }
        // console.log(response);
        return response.json();
    }).then(function(response) {

        updateUISuccess(response);

    }).catch(function(error){
        function updateUIError() {
            updateUIError();
        }
    });

    function updateUISuccess(response) {
        // add variables from xhr request here
    }
    
    //add error here from xml!!!!



})();

