<script setup>
// import { inject } from 'vue'
// const roomData = inject('data-key')
import  sonTwo  from './sonTwo.vue'
const emit = defineEmits(['get-message'])
const sendMsg = ()=>{
  emit('get-message','this is son')
}
const props = defineProps({
    message:String,
    count:Number
})
console.log(props);
</script>

<template>
  <div class="son">
    <h3>子组件Son</h3>
    <button @click="sendMsg">子传父</button>
    <div>{{ message }}---{{ count }}</div>
  </div>
  <!-- <div>{{ roomData}}</div> -->
  <div>----------------------------------</div>
  <sonTwo />
</template>
