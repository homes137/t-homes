<template>
  <header class="header">
    <div class="navbar-top-right">
      <TrafficLights />
    </div>
  </header>
  <main>
    <LandingPage />
  </main>
  <footer class="footer"></footer>
</template>

<script>
import TrafficLights from "./components/TrafficLights.vue";
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    TrafficLights,
    LandingPage,
  },
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #54968d;
}
.header {
  height: 10vh;
  background-color: #2c3e50;
}
.footer {
  height: 10vh;
  background-color: #2c3e50;
}
.navbar-top-right {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
