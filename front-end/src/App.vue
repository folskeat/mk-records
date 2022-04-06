<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  background-color: lightblue;
  background-image: url("~@/assets/data/bg.jpeg");

  background-size: cover;

  font-size: 16;
  font-weight: 600;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;

  margin: 0;
  padding: 0;

  z-index: 3;
}

nav {
  position: relative;

  padding-top: 20px;
  padding-bottom: 10px;

  z-index: 2;
}

nav a {
  font-weight: bold;
  color: #01254a;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
