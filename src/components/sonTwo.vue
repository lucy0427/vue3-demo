<script setup>
import { inject } from 'vue'
const roomData = inject('dataKey')

</script>

<template>
  <div class="sontwo">孙组件hhh</div>
  <div>{{ roomData}}</div>
  <div>----------------------------------</div>
</template>
