
<template lang="html">
  <div style="min-width: 500px">
    <div class="form">
      <vj-input placeholder="Nom"></vj-input>
      <vj-input placeholder="Email"></vj-input>
    </div>
    <div class="form">
      <vj-input placeholder="Prénom"></vj-input>
      <vj-input placeholder="Code postal"></vj-input>
    </div>
    <div class="form">
      <button>Valider</button>
    </div>
  </div>
</template>

<script>
import VjInput from 'components/VjInput';
export default {
  data() {
    return {
      email: '',
      name: '',
      skill: '',
    };
  },
  computed: {
  },
  ready() {},
  attached() {},
  methods: {
  },
  components: {
    VjInput,
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  text-overflow: ellipsis;
  margin-bottom: 6px;
  .input-group {
    flex: 1 0 auto;
    margin-left: 6px;
  }
  button {
    margin-left: 6px;
    flex: 1 0 auto;
    min-height: 3.6em;
  }
}
</style>
