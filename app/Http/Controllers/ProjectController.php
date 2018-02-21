<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use App\Project;
use App\User;
use \Firebase\JWT\JWT;

class ProjectController extends Controller
{
    public function get(){
            
    }

    public function addProject (Request $request){
        return Project::create([
            'name' => $request->input('name'),
            'user_id'=>$request->get('AuthUserId')
        ]);
    }

    public function deleteProject(Request $request){
       return Project::destroy($request->input('id'));
    }

    public function editProjectTitle(Request $request){
        $targetProject = Project::find($request->input('id'));
        $targetProject->name = $request->input('newName');
        return  $targetProject->save() ?  response()->json(200) : response()->json(400);
    }
}
