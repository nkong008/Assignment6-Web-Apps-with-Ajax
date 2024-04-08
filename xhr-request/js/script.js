// "use strict";

// (function() {

//     // var url = "https://api.artic.edu/api/v1/artworks";
//     var url = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
//     var httpRequest;
//     makeRequest();

//     //create and send a XHR Request
//     function makeRequest() {
//         httpRequest = new XMLHttpRequest();
//         httpRequest.onreadystatechange = responseMethod;
//         httpRequest.open('GET', url);
//         httpRequest.send();
//     }

//     //handle XHR reponse 
//     function responseMethod() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//               updateUISuccess(httpRequest.responseText);
//             }
//             else {
//                 updateUIError();
//             }
//             console.log(httpRequest.responseText);
//         }
//     }


//     //handle XHR success 
//     function updateUISuccess(responseText) {
//         var reponse = JSON.parse(responseText);
//         console.log(reponse);
       
//         var xhrDataDisplay = document.getElementById('xhrDataDisplay');
//         xhrDataDisplay.innerHTML = "<pre>" + JSON.stringify(reponse, null, 2) + "</pre>";
//         xhrDataDisplay.textContent = responseText;

        
//     }

//     //handle XHR Error 
//     function updateUIError() {
//         console.log('Error making the request');
//     }


// })();


// "use strict";

// (function() {

//     // var url = "https://api.artic.edu/api/v1/artworks";
//     var url = "https://api.artic.edu/api/v1/artworks";
//     var httpRequest;
//     makeRequest();

//     //create and send a XHR Request
//     function makeRequest() {
//         httpRequest = new XMLHttpRequest();
//         httpRequest.onreadystatechange = responseMethod;
//         httpRequest.open('GET', url);
//         httpRequest.send();
//     }

//     //handle XHR reponse 
//     function responseMethod() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//               updateUISuccess(httpRequest.responseText);
//             }
//             else {
//                 updateUIError();
//             }
//             console.log(httpRequest.responseText);
//         }
//     }


//     //handle XHR success 
//     function updateUISuccess(responseText) {
        
//         var reponse = JSON.parse(responseText);
        
    
        
//     }

//     //handle XHR Error 
//     function updateUIError() {
//         console.log('Error making the request');
//     }


// })();

"use strict";

(function () {

    var url = "https://api.artic.edu/api/v1/artworks";
    var httpRequest;
    makeRequest();

    // create and send an XHR Request
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    // handle XHR response
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                updateUISuccess(httpRequest.responseText);
            } else {
                updateUIError(httpRequest.status);
            }
        }
    }


    // let anchor = document.createElement("a");
    let xHR = document.getElementById('xhrDataDisplay');

    // handle XHR success
    function updateUISuccess(responseText) {
        var response = JSON.parse(responseText);
        // var condition = response.data[0].api_link;
        
        for(let i = 0; i < response.data.length; i++) {

            let output = '<section id="api-links">'
            var condition = response.data[i].api_link;
            let thumbnail = response.data[i].thumbnail.lqip;
            output += '<a href = "' + condition + '" target ="_blank">' + condition + '</a>';
            output += '<img src = "' + thumbnail + '" class ="thumbnail">';
            // output += anchor;
            // anchor.setAttribute('href', condition);
            // anchor.setAttribute('target', '_blank');
            // xHR.innerHTML = anchor;

            console.log(condition);

            output += "</section>"
            $("#xhrDataDisplay").html(output); 
        };

            



        // need help with variables in order to target them and display them onto the browser


        console.log(response);
        // console.log(condition);
        // Perform actions with the response data as needed
    }

    // handle XHR error
    function updateUIError(status) {
        console.log('Error making the request. Status:', status);
        
    }
//jquery ends here
})();

