
<template lang="html">
  <div style="min-width: 500px">
    <form v-on:submit.prevent class="inline">
      <input
        v-if="this.step === 0" transition="subscribe"
        type="text" placeholder="Votre nom"/>
      <input
        v-if="this.step === 1" transition="subscribe"
        type="text" placeholder="Votre email"/>
      <input
        v-if="this.step === 2" transition="subscribe"
        type="text" placeholder="Ce que vous savez faire"/>
      <button @click="next">
        <i class="fa fa-fw fa-angle-right fa-2x"></i>
      </button>
    </form>
    <div class="bullets">
      <i :class="bulletClass(0)"></i>
      <i :class="bulletClass(1)"></i>
      <i :class="bulletClass(2)"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      email: '',
      name: '',
      skill: '',
      currentInput: 'EmailInput',
    };
  },
  computed: {
  },
  ready() {},
  attached() {},
  methods: {
    bulletClass(index) {
      return ['fa', index === this.step ? 'fa-circle' : 'fa-circle-o'];
    },
    next() {
      this.step = (this.step + 1) % 3;
      switch (this.step) {
        case 0: { this.currentInput = 'EmailInput'; break; }
        case 1: { this.currentInput = 'NameInput'; break; }
        case 2: { this.currentInput = 'SkillInput'; break; }
        default: { this.currentInput = 'EmailInput'; }
      }
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/settings.scss";

.bullets {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  i {
    margin: 10px;
  }
}

form {
  display: flex;
}

input {
  flex: 1;
}

i {
  color: $border-color;
}

@keyframes fadeInRight {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
  }
}
@keyframes fadeOutLeft {
  from {
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}

.subscribe-transition {
}
.subscribe-enter {
  animation: fadeInRight 2s;
}
.subscribe-leave {
  animation: fadeOutLeft 2s;
}
</style>
