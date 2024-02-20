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

    // handle XHR success
    function updateUISuccess(responseText) {
        var response = JSON.parse(responseText);
        // var condition = response.artworks[0].main;

        // need help with variables inorder to target them and display them onto the browser


        console.log(response);
        // Perform actions with the response data as needed
    }

    // handle XHR error
    function updateUIError(status) {
        console.log('Error making the request. Status:', status);
        
    }

})();

