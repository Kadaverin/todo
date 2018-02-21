<?php

namespace App\Http\Middleware;

use Closure;
use Firebase\JWT\JWT;

class CheckJWT
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authHeader = $request->Header('Authorization');

         if ($authHeader) {
            /*
             * Extract the jwt from the Bearer
             */
             $jwt = substr($authHeader, strpos($authHeader, ' ') + 1, strlen($authHeader));
             //list($jwt) = sscanf( $authHeader, 'Authorization:Bearer %s');
             if ($jwt) {
                 try {
                      $secretKey = config ('app.key');
                      $token = JWT::decode($jwt, $secretKey, array('HS256'));
                      $request->attributes->set('AuthUserId' , $token->data->userId);

                      return $next($request);
                 }
                 catch(Exeption $e){
                     // token hasn't been encoded 
                     return response()->json('Unauthorized.', 401);
                 }
             }else { 
                 //No token was able to be extracted from the authorization header
                 return response()->json('Can not extract token ', 400);
             }
         }else { 
              // authorization header not found
               return response()->json('Bad request', 400);
          }
    
    }
}
