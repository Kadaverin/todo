<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public $timestamps = false;
    protected $fillable = ['id','name','isDone','project_id', 'priority'];
    protected $table = 'tasks';

    public function project()
    {
        return $this->belongsTo('App\Project','project_id');
    }
}

