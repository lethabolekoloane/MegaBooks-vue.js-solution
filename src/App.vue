<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MegaBooks</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about"></router-link>
          </li>
        </ul>
        <form class="d-flex">
          <router-link class="nav-link" to="/login">Login</router-link>
          <router-link class=" btn btn-outline-primary" to="/register"
            >Register</router-link
          >
        </form>
      </div>
    </div>
  </nav>

  <br />


  <router-view />

  <vue-fab mainBtnColor="#3599DB">
    <fab-item @clickItem="clickItem" :idx="0" title="add" icon="add" />
    <fab-item @clickItem="clickItem" :idx="1" title="https" icon="https" />
    <fab-item @clickItem="clickItem" :idx="2" title="edit" icon="edit" />
  </vue-fab>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
