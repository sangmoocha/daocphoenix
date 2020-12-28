/* eslint-disable prettier/prettier */
<template>
  <layout-welcom />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutWelcom from '@/components/layout/Welcome.vue';

@Component({
  components: {
    LayoutWelcom
  }
})
export default class App extends Vue {}
</script>

<style scoped></style>
