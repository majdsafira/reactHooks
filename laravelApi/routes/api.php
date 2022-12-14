<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Models\Post;

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
Route::get('Allposts', [PostController::class, 'Allposts']);
Route::delete('deletePost/{id}', [PostController::class,'destroy']);
Route::get('commentsCount', [PostController::class, 'commentsCount']);
Route::delete('deleteComment/{id}', [CommentController::class,'destroy']);
Route::apiResource('comment', CommentController::class);
Route::get('allComments/{post}',[CommentController::class,'getComments']);
Route::get('getAllComments/{post}',[CommentController::class,'getAllComments']);

Route::apiResource('ads', AdController::class);



Route::get('getPosts/{user}', [PostController::class,'getPosts']);

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

Route::delete('delete/{id}', [UserController::class, 'deleteUser']);
// ****************************************************************


