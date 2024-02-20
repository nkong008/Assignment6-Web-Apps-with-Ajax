"use strict";

// jQuery request

(function () {

    var url = "https://api.artic.edu/api/v1/artworks";
    
    $.get(url).done(function(response){
        console.log(response);
        updateUISuccess(response);
       
    }).fail(function(error) {
        // paste error fetch request here
            //  use jQuery syntax
    });


     // paste in xhr success code here
    //  use jQuery syntax
})();