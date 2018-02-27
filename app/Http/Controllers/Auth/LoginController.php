<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use App\User;
use DB;

class LoginController extends Controller
{
    public function login(Request $request){

        $name = $request->input('name');
        $password = $request->input('password');
        $id = User::getIdByCredentials($name , $password) ;
  
        if( !isset($id )) return response()->json('Unprocessable Entity' , 422);

        $key = config ('app.key');
        $token = array(
            "data" => [                  
                    "userId" => $id,
                    "userName" =>$name, 
                ]
        );
        $jwt = JWT::encode($token, $key);

        return response()->json(['token' => (string)$jwt ], 200);     
    }
}
