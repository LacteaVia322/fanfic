<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#a1c4fd">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Fanfic') }}</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    {{ csrf_field() }}
    <div id="auth">
        <div class="welcome">
            <div class="text">Привет!</div>
        </div>
        <form action="/fanficsApp" method="post">
            @csrf
            <div>
                <div class="text"> Заходи быстрее!</div>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="username" id="username" placeholder="Логин" required>
            </div>
            <div class="form-group">
                <input class="form-control" type="password" name="Пароль" id="password" placeholder="Пароль" required>
            </div>
            <div class="form-group">
                <button class="btn btn-success" type="submit" >Вход в аккаунт</button>
            </div>
        </form>
    </div>
</body>
</html>