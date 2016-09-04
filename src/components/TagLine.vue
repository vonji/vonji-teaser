<template>
  <div id="tag-line">
    <h2 :class="classes">
      {{ name }}
    </h2>
    <h2 class="verb">sait</h2>
    <h2 :class="classes">
      {{ skill }}
    </h2>
  </div>
</template>

<script>
import { db } from '../fb';
import _ from 'lodash';

export default {
  data() {
    return {
      status: 'still',
      name: 'On',
      skill: 'tous faire quelque chose',
      entries: [],
    };
  },
  computed: {
    classes() {
      if (this.status === 'leaving') {
        return 'revolver-transition revolver-leave';
      }
      if (this.status === 'entering') {
        return 'revolver-transition revolver-enter';
      }
      return 'revolver-transition';
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout.still);
    clearTimeout(this.timeout.leaving);
    clearTimeout(this.timeout.entering);
  },
  ready() {
    this.timeout = {};
    const updateTagLine = () => {
      const el = _.sample(this.entries);
      if (el) {
        this.name = el.name;
        this.skill = el.skill;
      }
    };
    const updateTransition = () => {
      if (this.status === 'still') {
        this.status = 'leaving';
        this.timeout.still = setTimeout(updateTransition, 500);
      } else if (this.status === 'leaving') {
        this.status = 'entering';
        this.timeout.leaving = setTimeout(updateTransition, 500);
      } else if (this.status === 'entering') {
        this.status = 'still';
        updateTagLine();
        this.timeout.entering = setTimeout(updateTransition, 5000);
      }
    };
    const startTransitioning = () => {
      updateTransition();
    };
    db.ref('/entries')
      .orderByChild('validated')
      .equalTo(true)
      .on('value', snap => {
        this.entries = snap.val();
        startTransitioning();
      });
  },
};
</script>

<style lang="scss" scoped>
#tag-line {
  display: flex;
  font-family: 'Roboto', sans-serif;
  .verb {
    &::after, &::before {
      content: "\00A0";
    }
  }
  .revolver-transition {
    &.name, &.skill {
      flex-grow: 1;
    }
    transition: all 0.5s ease-in-out;
    transform: translateY(0);
    opacity: 1;
  }
  .revolver-enter {
    transform: translateY(50%);
    opacity: 0;
  }
  .revolver-leave {
    transform: translateY(-50%);
    opacity: 0;
  }
}
</style>
