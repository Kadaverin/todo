import setHeaders from './setHeaders';


// export default function post( url , requestuestBody) {
  
//   return new Promise(function(resolve, reject) {
//     var req = new XMLHttpRequest();
    
//     req.open("POST" , url );
//     setHeaders(req)
    
//     req.onload =  function() {

//       if (req.status < 400)
//         resolve(JSON.parse(req.response));
//       else
//         reject(new Error("Request failed: " + req.statusText +' '+req.status ));
//     };

//     req.onerror  =  function() {
//      reject(new Error("Network error"));
//     };

//     req.send(requestuestBody);

//   });
// }

export default function request( requestType , url , requestuestBody = null) {
  
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    
    req.open(requestType , url );
    setHeaders(req)
    
    req.onload =  function() {

      if (req.status < 400)
        resolve(JSON.parse(req.response));
      else
        reject(new Error("Request failed: " + req.statusText +' '+req.status ));
    };

    req.onerror  =  function() {
     reject(new Error("Network error"));
    };

    requestuestBody ? req.send(requestuestBody) : req.send(requestuestBody);

  });
}


