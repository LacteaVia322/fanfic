<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ (isset($title) ? $title . ' | ' : '') . config('app.name', 'Fanfic') }}</title>

    <link href="css/reader.css" rel="stylesheet">
</head>
<body class="blockScroll theme-auto">
    <div class="nameFanfic text">
       {{ $fanfic->f_name}}
    </div>
    <div class="text"> 
        {{ $fanfic->f_text }}
    </div>
</body>
</html>