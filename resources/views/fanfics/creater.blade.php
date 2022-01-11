<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ (isset($title) ? $title . ' | ' : '') . config('app.name', 'Fanfic') }}</title>

    <link href="css/creater.css" rel="stylesheet">
</head>
<body class="blockScroll theme-auto">
    <div class="welcome" id="app">
        <div class="text"> Твое произведение.</div>
    </div>
    <form action="/creater/store" method="post">
    @csrf
    <div id="app">
        Название произведения.
    </div>
    <div id="app">
        <textarea rows="1" cols="45" name="nameFanfic" id = "nameFanfic" class = "namefanfic form-control" required></textarea>
    </div>
    <div id="app">
        Напиши сюда текст своего произведения.
    </div>
    <div id="app">
        <textarea rows="10" cols="45" name="textFanfic" id = "textFanfic" class = "textfanfic form-control" required></textarea>
    </div>
    <div id="app">
        <button class="btn btn-success" type="submit">Опубликовать</button>
    </div>
    </form>
</body>
</html>