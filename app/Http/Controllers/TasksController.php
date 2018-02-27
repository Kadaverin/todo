<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TasksController extends Controller
{
    public function addTask (Request $request){
        return Task::create([
            'name' => $request->input('name'),
            'project_id' => $request->input('project_id'),
            'priority' =>  $request->input('priority')
        ]);

    }
        
     public function deleteTask(Request $request){
       return Task::destroy($request->input('id'));
    }

    public function editTaskTitle(Request $request){
        $targetTask = Task::find($request->input('id'));
        $targetTask->name = $request->input('newName');

        return $targetTask->save() ?  response()->json(200) : response()->json(400);
    }

    public function changeTaskStatus(Request $request){
        $targetTask = Task::find($request->input('id'));
        $targetTask->isDone =  !$targetTask->isDone;
        return $targetTask->save() ?  response()->json(200) : response()->json(400);
    }

    public function updateTasksList(Request $request){

        foreach ( $request->all() as $taskIdWithPriorityArr){
            $task = Task::find($taskIdWithPriorityArr['id']); 
            $task->update (['priority' => $taskIdWithPriorityArr['priority']]);
        }

        return response()->json($request->all() , 200);
    }
       
}
