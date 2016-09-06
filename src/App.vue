<template>
  <div id="app">
    <div class="bg"></div>
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from 'components/MainPage';
export default {
  data() {
    return {
    };
  },
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
@import "~normalize.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700");
@import "./assets/colors.scss";
@import "./assets/inputs.scss";

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  h1, h2, h3, h4 {
    font-weight: 300;
    margin-bottom: 0.3em;
    margin-top: 0.3em;
  }
}
</style>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/static/img/wallhaven.png');
  background-size: cover;
  z-index: -2;
  height: 100vh;
  width: 100vw;
}
</style>
