<!DOCTYPE html>
<html>

<head>
  <title>Index</title>
  <link rel="stylesheet" href="{{url_for('static', filename='style.css')}}">
  <link rel="stylesheet" href="{{url_for('static', filename='darkStyle.css')}}" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="{{url_for('static', filename='darkMode.js')}}" defer></script>
</head>

<body onload="startTime()">
  {% if user %}
  {% with user=user %}
  {% include 'header.php' %}
  {% endwith %}
  {% else %}
  {% include 'header.php' %}
  {% endif %}
  <div class="content">
    <div class="welcome">
      {% if user %}
      <h2>Welcome, {{ user.name }}! HELLO</h2>
      {% else %}
      <h2>Welcome le s</h2>
      {% endif %}
      {% if user.lastLogin %}
      <h2>Derni&egrave;re connexion le {{user.lastLogin}}</h2>
      {% endif %}
    </div>

    <div class="bigTitle">
      <div class="dbLogo logo">
        <i class="fa fa-database"></i>
      </div>
      <div class="waviy">
        <span style="--i:1">G</span>
        <span style="--i:2">E</span>
        <span style="--i:3">S</span>
        <span style="--i:4">T</span>
        <span style="--i:5">I</span>
        <span style="--i:6">O</span>
        <span style="--i:7">N</span>
        <span style="--i:8"> </span>
        <br>
        <span style="--i:9">D</span>
        <span style="--i:10">E</span>
        &nbsp;
        &nbsp;
        <span style="--i:12">L</span>
        <span style="--i:13">A</span>
        &nbsp;
        &nbsp;
        <span style="--i:15">D</span>
        <span style="--i:16">B</span>
      </div>
    </div>
  </div>

  <div id="clockdate">
    <div class="clockdate-wrapper-light temps">
      <div id="clock"></div>
      <div id="date"></div>
    </div>
  </div>

  <br />

  <div class="listes">
    <div id="things-list1"></div>
    <div id="things-list2"></div>
  </div>

  {% if user %}
  <script user="{{user}}" src="{{url_for('static', filename='script.js')}}" defer id="scriptHome"></script>
  {% else %}
  <script user='{"no": "no"}' src="{{url_for('static', filename='script.js' )}}" defer></script>
  {% endif %}
  {% include 'footer.html' %}
</body>

</html>
