<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ChatController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('chat');
});

Route::post('/chat/send-message', [ChatController::class, 'store'])->name('chat.send');
