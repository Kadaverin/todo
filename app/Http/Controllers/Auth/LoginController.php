<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use App\User;
use DB;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    // use AuthenticatesUsers;

    // /**
    //  * Where to redirect users after login.
    //  *
    //  * @var string
    //  */
    // protected $redirectTo = '/home';

    // /**
    //  * Create a new controller instance.
    //  *
    //  * @return void
    //  */
    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    // }


    public function login(Request $request){

        $name = $request->input('name');
        $password = $request->input('password');

        // return response()->json([$name , $password], 200);

        $id = User::getIdByCredentials($name , $password) ;
    //    $id =   DB::table('users')->where([
    //                 ['name',$name],
    //                 ['password', $password]
    //              ])
    //             ->limit(1)
    //             ->value('id');

        if( !isset($id )) return response()->json('Unprocessable Entity' , 422);

        $key = config ('app.key');
        $token = array(
        "iss" => "http://example.org",
        "aud" => "http://example.com",
        "iat" => "1356999524",
        "nbf" => "1357000000" ,
        "data" => [                  // Data related to the signer user
                "userId" => $id,// userid from the users table
                "userName" =>$name, // User name
            ]
        );

        $jwt = JWT::encode($token, $key);


        return response()->json(['token' => (string)$jwt ], 200);
    
       
        
    }
}
