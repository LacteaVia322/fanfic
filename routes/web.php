<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FanficController;
//Auth::routes();

Route::get('/', function () {
    return view('home');
});

Route::get('/auth', function () {
    return view ('auth/login');
});

Route::get('/reader', function () {
    return view('fanfics/reader');
});

Route::post('/fanficsApp', [FanficController::class, 'app']);

Route::get('/creater', [FanficController::class, 'index'] );

Route::get('/fanficsApp', [FanficController::class, 'alldata'] );

Route::get('/reader', [FanficController::class, 'showFanfic'] );

Route::post('/creater/store', [FanficController::class, 'store'] );

