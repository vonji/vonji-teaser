
<template lang="html">
  <form v-on:submit.prevent class="inline">
    <input transition="subscribe" placeholder="Votre nom"/>
    <button>
      <i class="fa fa-fw fa-angle-right fa-2x"></i>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      status: 'init',
      email: '',
      name: '',
      skill: '',
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/settings.scss";

i {
  color: $border-color;
}

.subscribe-transition {

}
.subscribe-enter {

}
.subscribe-leave {

}
</style>
