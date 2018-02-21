<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use DB;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function projects(){
        return $this->hasMany('App\Project','user_id');
    }


    public static function  getIdByCredentials($name , $password) 
    {

                $user = DB::table('users')
                ->where('name', $name)
                ->limit(1)
                ->first();
                  
                
               if (!isset ($user) || $password =! encrypt($user->password) ) return;
                
             return $user->id;
    }

}
