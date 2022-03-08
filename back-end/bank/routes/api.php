<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['namespace' => 'API'], function() {
    Route::group(['namespace' => 'Account', 'prefix' => 'accounts'], function() {
        Route::get('/{user_id}', [App\Http\Controllers\API\Account\ReadController::class, '__invoke']);

        Route::patch('/{user_id}/write-off', [App\Http\Controllers\API\Account\WriteOffController::class, '__invoke']);

        Route::patch('/{user_id}/enrollment', [App\Http\Controllers\API\Account\EnrollmentController::class, '__invoke']);

        Route::patch('/{user_id}/unlocking', [App\Http\Controllers\API\Account\UnlockingController::class, '__invoke']);

        Route::patch('/{user_id}/locking', [App\Http\Controllers\API\Account\LockingController::class, '__invoke']);

        Route::post('/create', [App\Http\Controllers\API\Account\CreateController::class, '__invoke']);
    });
});