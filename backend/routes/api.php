<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::middleware('api')->group(function () {
    Route::get('blogs', [PostController::class, 'index']);
    Route::get('posts/{id}', [PostController::class, 'show']);
});
