<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deconnexion</title>
    <link rel="stylesheet" href="{{url_for('static', filename='style.css')}}">
    <link rel="stylesheet" href="{{url_for('static', filename='darkStyle.css')}}" />
    <script src="{{url_for('static', filename='darkMode.js')}}" defer></script>
</head>

<body>
    {% if user %}
    {%with user=user%}
    {% include 'header.php'%}
    {% endwith %}
    {% else %}
    {% include 'header.php' %}
    {% endif %}
    <div class="deconnexion">
        <h1>Voulez-vous vraiment vous déconnecter ?</h1>
        <form action="{{url_for('logout')}}" method="post">
            <button class="btnLout"> Déconnexion
            </button>
        </form>
    </div>
    {% include 'footer.html' %}
</body>

</html>

<style>
    body {
        width: 100%;
        height: 100%;
        background: #f1f1f1;
        background-image: linear-gradient(90deg,
                transparent 50px,
                #ffb4b8 50px,
                #ffb4b8 52px,
                transparent 52px),
            linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
        background-size: 100% 30px;
    }
</style>