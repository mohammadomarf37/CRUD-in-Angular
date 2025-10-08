<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// API's
    Route::get('/get-api', [ApiController::class, 'get_api']);
    Route::delete('/delete-api/{id}', [ApiController::class, 'delete_api']);
    Route::post('/post-api', [ApiController::class, 'post_api']);
    Route::put('/put-api/{id}', [ApiController::class, 'put_api']);