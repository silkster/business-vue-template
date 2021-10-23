<script>
// @ is an alias to /src
import AppButton from '@/components/Button/Button.vue';

export default {
  name: 'Home',
  components: {
    AppButton,
  },
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <app-button>Inquire</app-button>
  </div>
</template>
