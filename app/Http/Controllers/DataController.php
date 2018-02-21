<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use App\Project;
use App\User;
use DB;

class DataController extends Controller
{
    public function getTodo(Request $request){
        $id = $request->get('AuthUserId');
        $projects = User::find($id)->projects()->get();
        $tasksById = [] ;
        $projectsTasksIds = [];

        foreach ($projects as $project){
            $tasks =  $project->tasks()->get()->sortBy('priority');
        
            foreach ($tasks as $task){
                unset($task['priority']);
                $tasksById[$task->id] = $task;

                if ( array_key_exists ( $project->id , $projectsTasksIds)){
                        array_push($projectsTasksIds[$project->id] , $task->id); 
                }else {
                        $projectsTasksIds[$project->id] = array ($task->id);
                      }
            }
        }
        return response()->json(['projects' => $projects , 'tasksById' => $tasksById , 'projectsTasksIds' =>  $projectsTasksIds ] , 200);
    }
}
