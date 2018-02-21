<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public $timestamps = false;
    protected $table = 'projects';
    protected $fillable = ['id','name','user_id'];

    public function tasks(){
        return $this->hasMany('App\Task','project_id');
    }

    public function user(){
        return $this->belongsTo('App\User','user_id');
    }
}
