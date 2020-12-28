<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Welcome</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LayoutWelcome extends Vue {}
</script>

<style scoped></style>
