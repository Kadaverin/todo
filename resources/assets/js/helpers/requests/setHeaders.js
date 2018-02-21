export default function setHeaders(req){
    
   req.setRequestHeader('Content-Type' , 'application/json');
   req.setRequestHeader('X-CSRF-TOKEN', $("#token").attr('content'));
   req.setRequestHeader('Accept' , 'application/json');

   if (localStorage.getItem('token') !== null) {
       req.setRequestHeader('Authorization', 'Bearer '+  localStorage.getItem('token'));
   }
   
}