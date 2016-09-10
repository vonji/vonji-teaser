
<template lang="html">
  <div class="sign-in">
    <div class="form">
      <rolling-input class="rl-lastname rl-align-right" placeholder="Pierre"></rolling-input>
      <span>sait</span>
      <rolling-input class="rl-skill" placeholder="faire des cabrioles."></rolling-input>
    </div>
  </div>
</template>

<script>
import RollingInput from 'components/RollingInput';

export default {
  data() {
    return {
      email: '',
      name: '',
      skill: '',
    };
  },
  components: {
    RollingInput,
  },
};
</script>

<style lang="scss">
@import '../assets/settings.scss';

.sign-in {
  width: 100%;
  max-width: 900px;
}

.form {
  font-size: 1.5em;
  width: 100%;
  display: flex;
  align-items: baseline;
}

.rl-lastname {
  flex: 1 0 auto;
  margin-right: 0.5em;
}

.rl-lastname + span {
  opacity: 0.5;
  padding-bottom: 2rem;
}

.rl-skill {
  flex: 1 0 auto;
  margin-left: 0.5em;
}

input {
  outline: none;
  border: 0px;
  border-bottom: 1px solid $clr-prim;
  background-color: transparentize(black, 0.6);
  padding: 1rem;
  color: $controls-font-color;
}
</style>
