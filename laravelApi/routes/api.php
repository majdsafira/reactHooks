<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('post', PostController::class);
Route::apiResource('comment', CommentController::class);
Route::apiResource('ads', AdController::class);



// ****************************************************************

//login+register
Route::post('register', [UserController::class, 'registerAPI']);
Route::post('login', [UserController::class, 'loginAPI']);
Route::get('getuser/{id}', [UserController::class, 'getUser']);
//profile+update
Route::get('users/{id}', [UserController::class, 'getInfo']);
Route::post('update/{id}', [UserController::class, 'update']);
//all users
Route::get('users', [UserController::class, 'getAllUsers']);

// ****************************************************************
