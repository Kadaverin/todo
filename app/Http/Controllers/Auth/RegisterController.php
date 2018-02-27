<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;


class RegisterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
      //  $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255|unique:users,name',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */

      protected function create(array $data)
    {

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

     protected function registered(Request $request, $user)
    {
         $key = config ('app.key');
            $token = array(
            "data" => [                  // Data related to the signer user
                    "userId" => $user['id'],// userid from the users <table></table>
                    "userName" =>$user['name'], // User name
                ]
            );

        $jwt = JWT::encode($token, $key);

        return response()->json(['token' => (string)$jwt ], 200);
    }

       public function register(Request $request){
        $this->validator($request->all())->validate();

        $user = $this->create($request->all());

        return $this->registered($request, $user);
    }

}
