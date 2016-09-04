<template lang="html">
  <page>
    <img class="logo" src="/static/img/logo-orange.png" alt="">

    <h1>On sait tous faire quelque chose !</h1>

    <tag-line></tag-line>
  </page>
</template>

<script>
import Page from 'components/page';
import TagLine from 'components/TagLine';

export default {
  components: {
    Page,
    TagLine,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/colors.scss";

.logo {
  width: 12em;
  margin-bottom: 2em;
}
.page {
  color: white;
  background: linear-gradient(
    top,
    transparentize(darken($clr-scnd, 32), 0.14),
    darken($clr-scnd, 48) 90%
  );
}
</style>
