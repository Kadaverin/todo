<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');

Route::group(['middleware' => 'JWT'] , function() {

    Route::get('get_users_todo_list', 'DataController@getTodo');    
    Route::post('add_project' , 'ProjectController@addProject');
    Route::post('delete_project' , 'ProjectController@deleteProject');
    Route::post('edit_project_title' , 'ProjectController@editProjectTitle');
    Route::post('edit_task_title' , 'TasksController@editTaskTitle');
    Route::post('delete_task' , 'TasksController@deleteTask');
    Route::post('add_task' , 'TasksController@addTask');
    Route::post('update_tasks_list','TasksController@updateTasksList');
    Route::post('change_task_status' ,'TasksController@changeTaskStatus' );
});


