<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>login</title>
    <link rel="stylesheet" href="{{url_for('static', filename='style.css')}}" />
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
    <form class="formLogin" action="{{url_for('login')}}" method="post">
      <div class="titleLogin">Welcome,<br /><span>login to continue</span></div>
      <input class="inputLogin" name="email" placeholder="Email" type="email" />
      <input class="inputLogin" name="password" placeholder="Password" type="password" inputmode="numeric" />
      <p>
        You're new ?
        <a class="linkLogin" href="{{url_for('signinForm')}}">Sign Up Here!</a>
      </p>
      <a class="linkLogin" href=""></a>
      <button class="button-confirm" name="submit">Let`s go →</button>
    </form>
    {% include 'footer.html' %}
  </body>
  <style>
    body {
      --bg: radial-gradient(#000 5%, #0000 6%);
      --size: 3rem;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(#000 5%, #0000 6%),
        radial-gradient(#000 5%, #0000 6%);
      background-position: 0 0, calc(var(--size) / 2) calc(var(--size) / 2);
      background-size: var(--size) var(--size);
    }
  </style>
</html>