<script setup>
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue';
const counterStore = useCounterStore()
console.log(counterStore);

onMounted(() => {
  counterStore.getList()
})
// import SonCom from './components/sonCom.vue'
// provide('dataKey', 'this is room data')
// // const count = ref(100)
// const getMessage = (msg) => {
//   console.log(msg);
// }
// import { provide, ref,watch } from 'vue'
// const state = ref({
//   name:'why',
//   age: 18
// })
// const changeName = () => {
//   state.value.name = 'yaoyao'
// }
// const changeAge = () => {
//   state.value.age = 23
// }
// watch(
//   ()=> state.value.age,
//   () => {
//     console.log('age变化了');
//   }
// )
</script>

<template>
  <div>
    <button @click="counterStore.increment">{{counterStore.count}}</button>
    {{ counterStore.doubleCount}}

    <ul>
      <li v-for="item in counterStore.list" :key="item.id">{{item.name}}</li>
    </ul>
    <!-- <div class="father">
      <h2>父组件app</h2>
      <SonCom @get-message="getMessage"/>
    </div>

   <div>当前name -- {{ state.name }}</div>
   <div>当前age -- {{ state.age }}</div>
   <div>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div> -->
</div>
</template>