import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from 'axios'
const API_URL = 'http://geek.itheima.net/v1_0/channels'
export const useCounterStore = defineStore('counter', ()=>{
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  const doubleCount = computed(() => count.value*2)


  const list = ref([])
  const getList = async () => {
    const res = await axios.get(API_URL)
    list.value = res.data.data.channels
  }
  return {
    count,
    increment,
    doubleCount,
    list,
    getList
  }
})