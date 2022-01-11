<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ (isset($title) ? $title . ' | ' : '') . config('app.name', 'Fanfic') }}</title>

    <link href="css/ficbook.css" rel="stylesheet">
</head>
<body class="blockScroll theme-auto">
    <div class="text">
         Привет!!
    </div>
    <div class="text">
        Вот твои произведения.
    </div>
    <table>
    @foreach( $data as $element)
    <tr>
        <td class="textFanfic">
            <p>{{ $element->f_name }}</p>
        </td>
    </tr>
    @endforeach
    </table>
    <form action="/creater">
    <div id="app">
        <button class="btn btn-success" type="submit">Создать новое произведение</button>
    </div>
    </form>
</body>
</html>