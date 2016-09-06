<template lang="html">
  <page>
    <img class="logo" src="/static/img/logo-orange.png" alt="">

    <h1>On sait tous faire quelque chose !</h1>

    <tag-line></tag-line>

    <h2>Construisons ensemble la plus grande base de compétences du monde !</h2>

    <subscribe></subscribe>
  </page>
</template>

<script>
import Page from 'components/page';
import TagLine from 'components/TagLine';
import Subscribe from 'components/Subscribe';

export default {
  components: {
    Page,
    TagLine,
    Subscribe,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/colors.scss";

.logo {
  width: 13em;
}

#tag-line {
  font-size: 1.2em;
}

h1 {
  margin-top: 60px;
  font-size: 2.4em;
}

h2 {
  margin-top: 60px;
  margin-bottom: 20px;
  color: $clr-gray;
  font-size: 1.2em;
  max-width: 350px;
  text-align: center;
  line-height: 1.5;
}

.subscribe {
  font-size: 1.1em;
}

.page {
  color: $clr-white;
  background: linear-gradient(
    top,
    transparentize(darken($clr-scnd, 32), 0.14),
    darken($clr-scnd, 48) 90%
  );
}
</style>
