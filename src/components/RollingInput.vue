<template lang="html">

  <div :class="{ 'rl-wrapper': true, 'rl-dirty': isDirty }">
    <input class="rl" type="text" @input="onChange" :value="content" />
    <label class="rl-placeholder-label"
      :style="{
        opacity: placeholderOpacity,
      }"
    >{{ placeholder }}</label>
  </div>

</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    placeholderOpacity: {
      type: Number,
      default: 0.6,
    },
  },
  methods: {
    onChange(el) {
      console.log(el);
      console.log('test');
      this.content = el.target.text();
    },
  },
  computed: {
    isDirty() {
      return this.content && this.content !== '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors.scss';
$gap: 16px;

@mixin transition($a, $i) {
  transition: top #{$a}s linear,
    transform #{$a}s linear,
    opacity #{$i}s linear,
    color #{$a}s linear;
}

.rl-wrapper {
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rl-align-right {
  text-align: right;
  input.rl {
    text-align: right;
  }
  .rl-placeholder-label {
    transform-origin: right;
  }
}

.rl-placeholder-label {
  position: absolute;
  pointer-events: none;
  width: calc(100% - #{$gap * 2});
  top: 50%;
  left: $gap;
  color: white;
  transform: translateY(-50%) scaleY(1);
  transform-origin: left;
  @include transition(0.12, 0.1);
}

input.rl:focus ~ .rl-placeholder-label,
.rl-wrapper.rl-dirty > .rl-placeholder-label {
  top: 0%;
  opacity: 0 !important;
  transform: translateY(-15%) scaleY(0.35) scaleX(0.4);
  @include transition(0.12, 8);
}
</style>
