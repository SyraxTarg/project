<div class="radio-inputs header">
  <div class="menu">
    <label class="radio">
      <a href="{{ url_for('home') }}"><input type="radio" name="radio" {% if selected=='home' %}checked{% endif %} />
        <span class="name">Home</span></a>
    </label>
    {% if user %}
    <label class="radio">
      <a href="{{ url_for('get_things') }}"><input type="radio" name="radio" {% if selected=='things' %}checked{% endif
          %} />
        <span class="name">Things</span></a>
    </label>
    {% endif %}
    <label class="radio">
      <a href="{{ url_for('get_users') }}"><input type="radio" name="radio" {% if selected=='users' %}checked{% endif
          %} />
        <span class="name">Users</span></a>
    </label>
    <label class="radio">
      <a href="{{ url_for('signinForm') }}"><input type="radio" name="radio" {% if selected=='signin' %}checked{% endif
          %} />
        <span class="name">Signin</span></a>
    </label>
    <label class="radio">
      <a href="{{ url_for('projectPage') }}"><input type="radio" name="radio" {% if selected=='project' %}checked{%
          endif %} />
        <span class="name">My Projects</span></a>
    </label>
    {% if user %}
    <label class="radio">
      <a href="{{ url_for('newThingForm') }}"><input type="radio" name="radio" {% if selected=='add thing' %}checked{%
          endif %} />
        <span class="name">Add Thing</span></a>
    </label>
    <label class="radio">
      <a href="{{ url_for('addPicture') }}"><input type="radio" name="radio" {% if selected=='add file' %}checked{%
          endif %} />
        <span class="name">Add File</span></a>
    </label>
    <label class="radio">
      <a href="{{ url_for('filePage') }}"><input type="radio" name="radio" {% if selected=='file' %}checked{% endif
          %} />
        <span class="name">Files</span></a>
    </label>
    {% endif %}

  </div>

  <div class="other">
    <!-- c'est la que commence le switch -->
    <label class="switch">
      <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="#ffd43b">
            <circle r="5" cy="12" cx="12"></circle>
            <path
              d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z">
            </path>
          </g>
        </svg></span>
      <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
          </path>
        </svg></span>
      <input type="checkbox" class="input mode">
      <span class="slider"></span>
    </label>
    <!-- c'est la que finit le switch -->

    {% if user %}
    <div class="logoutButton">
      <a href="{{ url_for('logoutForm') }}">
        <button class="BtnLogout">

          <div class="signLogout"><svg viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
              </path>
            </svg></div>

          <div class="textLogout">Logout</div>
        </button>
      </a>
    </div>

    {% else %}
    <div class="loginButton">
      <a href="{{ url_for('loginForm') }}">
        <button class="Btn">

          <div class="sign"><svg viewBox="0 0 512 512">
              <path
                d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z">
              </path>
            </svg></div>
          <div class="text">Login</div>
        </button>
      </a>
    </div>
    {% endif %}

  </div>



</div>
<script>
  function dark() {
    var audio = document.querySelector("audio")
    var header = document.body.querySelector(".header");
    var footer = document.body.querySelector("#footer");
    var input = header.querySelector(".mode");
    var dbLogo = document.body.querySelector(".logo");
    var temps = document.body.querySelector(".temps");
    var bg = document.querySelector(".fileBody");
    var bg2 = document.querySelector(".addFileBody");
    var bg3 = document.querySelector(".projectsBody");
    if (header.classList == "dark header" && footer.classList == "darkFooter") {
      // Check if the elements exist before accessing their classList or other properties
      if (header) {
        header.classList = "radio-inputs header";
      }

      if (footer) {
        footer.classList = "lightFooter";
        localStorage.setItem('mode', 'lightmode'); // Only set this if footer exists
      }

      if (dbLogo) {
        dbLogo.classList = "dbLogo logo";
      }

      if (temps) {
        temps.classList = "clockdate-wrapper-light temps";
      }

      if (bg) {
        bg.classList = "fileBodyLight fileBody";
      }

      if (bg2) {
        bg2.classList = "addFileBodyLight addFileBody";
      }
      if (bg3) {
        bg3.classList = "projectsBodyLight projectsBody";
      }

      if (input) {
        localStorage.setItem('checked', false);
        input.checked = false;
      }

    }
    else {
      // Check if the elements exist before accessing their classList or other properties
      if (header) {
        header.classList = "dark header";
      }

      if (footer) {
        footer.classList = "darkFooter";
        localStorage.setItem('mode', 'darkmode'); // Only set this if footer exists
      }

      if (dbLogo) {
        dbLogo.classList = "darkDbLogo logo";
      }

      if (temps) {
        temps.classList = "clockdate-wrapper-dark temps";
      }

      if (bg) {
        bg.classList = "fileBodyDark fileBody";
      }

      if (bg2) {
        bg2.classList = "addFileBodyDark addFileBody";
      }

      if (bg3) {
        bg3.classList = "projectsBodyDark projectsBody";
      }

      if (input) {
        localStorage.setItem('checked', true);
        input.checked = true;
      }

    }
    console.log(input.checked);
  }


  var mode = document.body.querySelector(".mode")
  mode.addEventListener('click', dark, false)

</script>

<style>
  .other {
    display: flex;
    flex-direction: row;
    gap: 1vw;
  }

  .signLogout {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signLogout svg {
    width: 17px;
  }

  .signLogout svg path {
    fill: white;
  }

  .textLogout {
    position: absolute;
    right: -3%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: .3s;
  }

  .BtnLogout:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: .3s;
  }

  .BtnLogout:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 20px;
  }

  .BtnLogout:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: .3s;
    padding-right: 10px;
  }

  .BtnLogout:active {
    transform: translate(2px, 2px);
  }

  .menu {
    display: flex;
  }

  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 3vw;
    height: 3vh;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: #ff90e8;
  }

  .sign {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 17px;
  }

  .sign svg path {
    fill: white;
  }

  .text {
    position: absolute;
    right: -3%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: .3s;
  }

  .Btn:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: .3s;
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 20px;
  }

  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: .3s;
    padding-right: 10px;
  }

  .Btn:active {
    transform: translate(2px, 2px);
  }


  .radio-inputs {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0.5rem;
    background-color: #70c489;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
  }

  .radio-inputs .radio input {
    display: none;
  }

  .radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border: none;
    padding: 0.5rem 0.8rem;
    color: ;
    transition: all 0.15s ease-in-out;
    position: relative;
  }

  .radio-inputs .radio input:checked+.name {
    background-color: #e8e8e8;
    font-weight: 600;
  }

  .radio-inputs .radio input+.name:hover {
    color: #fff;
  }

  .radio-inputs .radio input:checked+.name:hover {
    color: #1d1d29;
  }

  .radio-inputs .radio input:checked+.name::after,
  .radio-inputs .radio input:checked+.name::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #70c489;
    bottom: 0;
  }

  .radio-inputs .radio input:checked+.name::after {
    right: -10px;
    border-bottom-left-radius: 300px;
    box-shadow: -3px 3px 0px 3px #e8e8e8;
  }

  .radio-inputs .radio input:checked+.name::before {
    left: -10px;
    border-bottom-right-radius: 300px;
    box-shadow: 3px 3px 0px 3px #e8e8e8;
  }

  */
</style>